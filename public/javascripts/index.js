$(document).ready(function () {
    renderAllChats();

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
                $(".chats").append(`<div>${chat.name}</div>`);
            },
        });
    });
});

function renderAllChats() {
    $.ajax({
        type: "GET",
        url: "/chats/",
        success: function (chats) {
            $(".chats").html('')
            chats.forEach(chat => {
                $(".chats").append(`<div>${chat.name}</div>`);
            });
        },
    });
}
