$(document).ready(function () {
    renderAllChats();

    $(".send-btn").click(async function () {
        await handleSend();
    });

    $(".message-input").keydown(async function (e) {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            await handleSend();
        }
    });

    async function handleSend() {
        let chatId = $(".messenger-header").attr("active-chat");
        let message = $(".message-input").val().trim();
        if (message) {
            message = $(".message-input").val();
            $(".message-input").val("");
            await sendMessage(chatId, message);
        }
    }

    $(document).on("click", ".messenger-header .burger", function () {
        $(".users-block").toggle();
    });

    $(document).on("click", ".messenger-header button", function () {
        let chatId = $(".messenger-header").attr("active-chat");
        $.ajax({
            type: "POST",
            url: `/chats/${chatId}/members`,
            data: {
                members: [{ id: prompt("Enter userID") }],
            },
        });
    });

    $(document).on("click", ".chat", async function () {
        let chatId = $(this).attr("chat-id");
        let chat = await getChatInfo(chatId);
        let messages = await getAllMessagesFromChat(chatId);
        renderActiveChat(chatId);
        renderChatHeader(chat);
        renderChat(messages);
    });

    $(".create-chat").click(function (e) {
        let chat = {
            name: prompt("Enter chat name"),
            description: "none",
            logo_url: "https://img.cryptorank.io/coins/stonks1732650263205.png",
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

    $(".message-input").on("input", function () {
        $(this).height(0);
        $(this).height(this.scrollHeight);
    });
});

function renderActiveChat(chatId) {
    $(".chat").each(function (e) {
        $(this).attr("active", false);
    });
    $(`.chat[chat-id='${chatId}']`).attr("active", true);
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
        url: `/chats/${chatId}`,
    });
}

async function getAllMessagesFromChat(chatId) {
    return await $.ajax({
        type: "GET",
        async: false,
        url: `/chats/${chatId}/messages`,
    });
}

async function sendMessage(chatId, message) {
    return await $.ajax({
        type: "POST",
        url: `/chats/${chatId}/messages`,
        data: {
            message: message,
        },
    });
}

function renderChat(messages) {
    $(".messages").html("");
    messages.forEach((m) => {
        $(".messages").append(`
            <div class="message ${m.user_id == myUserId? "my-message" : ''}" > ${m.user_id != myUserId? m.username : ''} <pre>${m.message}</pre> </div>
        `);
    });
}

function renderChatHeader(chatInfo) {
    $(".messenger-header").html("");
    $(".messenger-header").attr("active-chat", chatInfo.id);
    $(".messenger-header").append(`
        <img src="${chatInfo.logo_url}" alt="">
        <h1>${chatInfo.name}</h1>
        <button>Add user</button> 
        <div class="burger"> 
            <img src = '../images/burger.png'>
        </div>   
    `);
}
