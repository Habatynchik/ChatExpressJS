const runQuery = require('../configurations/db')
const chatQueries = require('./queries/chatQueries')

const chatRepository = {
    getChat: async (id) => {
        try {
            let result = await runQuery(chatQueries.SELECT_CHAT_BY_ID, [id])
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    },
    getAllChats: async () => {
        try {
            let result = await runQuery(chatQueries.SELECT_ALL_CHATS)
            return result.rows;
        } catch (error) {
            throw error;
        }
    },
    getAllChatsByUserId: async (id) => {
        try {
            let result = await runQuery(chatQueries.SELECT_ALL_CHATS_BY_USER_ID, [id])
            return result.rows;
        } catch (error) {
            throw error;
        }
    },
    createChat: async (chat) => {
        try {
            let result = await runQuery(chatQueries.CREATE_CHAT, [chat.name, chat.description, chat.logo_url])
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    },
    updateChat: async (chat) => {
        try {
            let result = await runQuery(chatQueries.UPDATE_CHAT, [chat.id, chat.name, chat.description, chat.logo_url])
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    },
    deleteChat: async (id) => {
        try {
            await runQuery(chatQueries.DELETE_CHAT, [id])
            return true;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = chatRepository