const chatMembersQueries = {
    CREATE_CHAT_MEMBER: `
        INSERT INTO chat_members (chat_id, user_id) VALUES ($2, $1) RETURNING *;
    `,
    DELETE_CHAT_MEMBER: `
        DELETE FROM chat_members WHERE user_id = $1 AND chat_id = $2;
    `,
}

module.exports = chatMembersQueries