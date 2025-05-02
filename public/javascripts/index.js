$(document).ready(function () {
    renderAllChats();

    $(document).on("click", ".chat", async function () {
        let chatId = $(this).attr("chat-id");
        let chat = await getChatInfo(chatId);
        let messages = await getAllMessagesFromChat(chatId)
        renderActiveChat(chatId)
        console.log(chat)
        console.log(messages)
    });

    $(".create-chat").click(function (e) {
        let chat = {
            name: prompt("Enter chat name"),
            description: "none",
            logo_url: "none",
        };
        $.ajax({
            type: "POST",
            url: "/chats/",
            data: chat,
            success: function (chat) {
                $(".chats").append(
                    `<div class='chat' chat-id='${chat.id}'>${chat.name}</div>`
                );
            },
        });
    });
});

function renderActiveChat(chatId) {
    $(".chat").each(function(e) {
        $(this).attr('active', false);
    }) 
    $(`.chat[chat-id='${chatId}']`).attr('active', true);
}

function renderAllChats() {
    $.ajax({
        type: "GET",
        url: "/chats/",
        success: function (chats) {
            $(".chats").html("");
            chats.forEach((chat) => {
                $(".chats").append(
                    `<div class='chat' chat-id='${chat.id}'>${chat.name}</div>`
                );
            });
        },
    });
}

async function getChatInfo(chatId) {
    return await $.ajax({
        type: "GET",
        url: `/chats/${chatId}`
    });
}

async function getAllMessagesFromChat(chatId) {
    return await $.ajax({
        type: "GET",
        async: false,
        url: `/chats/${chatId}/messages`,
    });
}
