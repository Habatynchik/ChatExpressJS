const runQuery = require('../configurations/db')
const chatMembersQueries = require('../repositories/queries/chatMembersQueries')

const chatMembersRepository = {
    addMemberIntoChat: async (memberId, chatId) => {
        try {
            let result = await runQuery(chatMembersQueries.CREATE_CHAT_MEMBER, [memberId, chatId])
            return result.rows[0]
        } catch (error) {
            throw error
        }
    },
    deleteMemberFromChat: async (memberId, chatId) => {
        try {
            await runQuery(chatMembersQueries.DELETE_CHAT_MEMBER, [memberId, chatId])
            return true;
        } catch (error) {
            throw error
        }
    },
    getAllMembersFromChat: async (chatId) => {
        try {
            let result = await runQuery(chatMembersQueries.SELECT_CHAT_MEMBERS, [chatId])
            return result.rows;
        } catch (error) {
            throw error
        }
    }
}

module.exports = chatMembersRepository