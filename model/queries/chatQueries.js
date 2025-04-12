const chatMessages =  {
    SELECT_ALL_CHATS: "",
    SELECT_CHAT_BY_ID: "",
    SELECT_ALL_CHATS_BY_USER_ID: "",
    CREATE_CHAT: "",
    DELETE_CHAT: "DELETE FROM chats WHERE id = $1;",
    UPDATE_CHAT: "",
}

module.exports = chatMessages;