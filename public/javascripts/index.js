$(document).ready(function () {
    renderAllChats();

    $('.send-btn').click(async function (e) {
        let chatId = $(".messenger-header").attr('active-chat');
        let message = $(".message-input").val();  
        $(".message-input").val('');  
        await sendMessage(chatId, message);
    });

    $(document).on('click', '.messenger-header button', async function () {
        let chatId = $(".messenger-header").attr('active-chat');
        let chat = await getChatInfo(chatId);
        
        $.ajax({
            type: 'GET',
            url: '/users',
            success: function(users) {
                let userListHtml = $.map(users, function(user) {
                    return `<div class='user-option' data-user-id='${user.id}'>${user.username}</div>`;
                }).join('');
                let modalHtml = `
                    <div class='modal'>
                        <div class='modal-container'>
                            <div class='modal-header'>
                                <h2>Add user to ${chat.name}</h2>
                                <button class='close-modal'>×</button>
                            </div>
                            <div class='modal-content'>
                                <div class='user-list'>${userListHtml}</div>
                            </div>
                        </div>
                    </div>
                `;
                
                $('body').append(modalHtml);
                
                $('.user-option').on('click', function() {
                    let userId = $(this).data('user-id');
                    $.ajax({
                        type: 'POST',
                        url: `/chats/${chatId}/members`,
                        data: JSON.stringify({
                            members: [{ id: userId }]
                        }),
                        contentType: 'application/json',
                        success: function() {
                            $('.modal').remove();
                            alert('User added successfully!');
                        }
                    });
                });
                
                $('.close-modal').on('click', function() {
                    $('.modal').remove();
                });
            }
        });
    });

    $(document).on("click", ".chat", async function () {
        let chatId = $(this).attr("chat-id");
        let chat = await getChatInfo(chatId);
        let messages = await getAllMessagesFromChat(chatId)
        renderActiveChat(chatId)
        renderChatHeader(chat)
        renderChat(messages)
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
});

function renderActiveChat(chatId) {
    $(".chat").each(function() {
        $(this).attr('active', 'false');
    });
    
    $(`.chat[chat-id='${chatId}']`).attr('active', 'true');
}

function renderAllChats() {
    $.ajax({
        type: "GET",
        url: "/chats/",
        success: function (chats) {
            $(".chats").html("");
            $.each(chats, function(index, chat) {
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
        url: `/chats/${chatId}/messages`,
    });
}

async function sendMessage(chatId, message) {
    return await $.ajax({
        type: "POST",
        url: `/chats/${chatId}/messages`,
        data: {
            message: message
        },
    });
}

function renderChat(messages) {
    $(".messages").html('');
    $.each(messages, function(index, m) {
        $('.messages').append(`
            <div> ${m.username}: ${m.message} </div>
        `);
    })
}

function renderChatHeader(chatInfo){
    $(".messenger-header").html('');
    $(".messenger-header").attr('active-chat', chatInfo.id);
    $('.messenger-header').append(`
        <img src="${chatInfo.logo_url}" alt="">
        <h1>${chatInfo.name}</h1>
        <button>Add user</button>    
    `);    
}