const chatRepository =  require("../repositories/chatRepository")
const chatMembersRepository = require("../repositories/chatMembersRepository")

const chatService = {
    createChat: async (chat) => {
        chat =  await chatRepository.createChat(chat);
        return chat
    },
    updateChat: async (chat) => {
        chat =  await chatRepository.updateChat(chat);
        return chat
    },
    addMemberIntoChat: async (memberId, chatId) => {
       return await chatMembersRepository.addMemberIntoChat(chatId, memberId);
    },
    deleteMemberFromChat: async ( memberId, chatId) => {
        return await chatMembersRepository.deleteMemberFromChat(chatId);
    }
}

module.exports = chatService