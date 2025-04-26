const chatRepository =  require("../repositories/chatRepository")
const chatMembersRepository = require("../repositories/chatMembersRepository")

const chatService = {
    getAllChats: async (userId) => {
        return await chatRepository.getAllChatsByUserId(userId);
    },
    createChat: async (chat) => {
        chat =  await chatRepository.createChat(chat);
        return chat
    },
    updateChat: async (userId, chat) => {
        let chats = await chatRepository.getAllChatsByUserId(userId);
        if (chats.length > 0 && chats.find(c => c.id === chat.id)) {
            chat =  await chatRepository.updateChat(chat);
            return chat;
        }
        throw new Error("Chat not found");
    },
    deleteChat: async (chatId) => {
        return await chatRepository.deleteChat(chatId);
    },
    addMemberIntoChat: async (memberId, chatId) => {
       return await chatMembersRepository.addMemberIntoChat(chatId, memberId);
    },
    deleteMemberFromChat: async ( memberId, chatId) => {
        return await chatMembersRepository.deleteMemberFromChat(chatId);
    }
}

module.exports = chatService