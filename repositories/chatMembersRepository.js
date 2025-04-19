const runQuery = require('../configurations/db')
const chatMembersQueries = require('../repositories/queries/chatMembersQueries')

const chatMembersRepository = {
    addMemberIntoChat: async (chatId, memberId) => {
        try {
            let result = await runQuery(chatMembersQueries.CREATE_CHAT_MEMBER, [chatId, memberId])
        } catch (error) {
            throw error
        }
    },
    deleteMemberFromChat: async (chatId, memberId) => {
        try {
            let result = await runQuery(chatMembersQueries.DELETE_CHAT_MEMBER, [chatId, memberId])
        } catch (error) {
            throw error
        }
    }
}

module.exports = chatMembersRepository