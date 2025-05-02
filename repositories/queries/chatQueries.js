const chatMessages =  {
    SELECT_ALL_CHATS: `
        SELECT * FROM chats;
    `,
    SELECT_CHAT_BY_ID: `
        SELECT * FROM chats c WHERE c.id = $1;
    `,
    SELECT_ALL_CHATS_BY_USER_ID: `
        SELECT c.* FROM chats c 
            JOIN chat_members cm on c.id = cm.chat_id 
                   WHERE cm.user_id = $1;
    `,
    CREATE_CHAT: `
        INSERT INTO chats (name, description, logo_url) 
        VALUES ($1, $2, $3)
        RETURNING *;
    `,
    DELETE_CHAT: `
        DELETE FROM chats 
               WHERE id = $1;
    `,
    UPDATE_CHAT: `
        UPDATE chats 
        SET name = $2, description = $3, logo_url = $4 
        WHERE id = $1
        RETURNING *;;
    `,
}

module.exports = chatMessages;