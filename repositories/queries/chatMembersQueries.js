const chatMembersQueries = {
    CREATE_CHAT_MEMBER: `
        INSERT INTO chat_members (chat_id, user_id) VALUES ($1, $2) RETURNING *;
    `,
    DELETE_CHAT_MEMBER: `
        DELETE FROM chat_members WHERE user_id = $2 AND chat_id = $1;
    `,
}

module.exports = chatMembersQueries