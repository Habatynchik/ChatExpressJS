const runQuery = require('../configurations/db')
const messageQueries = require('./queries/messageQueries')

const messageRepository = {
    getAllMessages: async () => {
        try {
            let result = await runQuery(messageQueries.SELECT_ALL_MESSAGES)
            return result.rows;
        } catch (error) {
            throw error;
        }
    },
    getMessageByChatId: async (chatId) => {
        try {
            let result = await runQuery(messageQueries.SELECT_MESSAGES_BY_CHAT_ID, [chatId])
            return result.rows;
        } catch (error) {
            throw error;
        }
    },
    insertMessage: async (message, userId, chatId) => {
        try {
            let result = await runQuery(messageQueries.INSERT_MESSAGE,
                [message, userId, chatId]);
            return result.rows;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = messageRepository;