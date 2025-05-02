const chatRepository = require("../repositories/chatRepository")
const chatMembersRepository = require("../repositories/chatMembersRepository")

const chatService = {
    getAllChats: async (userId) => {
        return await chatRepository.getAllChatsByUserId(userId);
    },
    createChat: async (chat) => {
        chat = await chatRepository.createChat(chat);
        return chat
    },
    updateChat: async (userId, chat) => {
        let chats = await chatRepository.getAllChatsByUserId(userId);
        if (chats.length > 0 && chats.find(c => c.id === chat.id)) {
            chat = await chatRepository.updateChat(chat);
            return chat;
        }
        throw new Error("Chat not found");
    },
    getChat: async (chatId) => {
        return await chatRepository.getChat(chatId);
    },
    deleteChat: async (chatId) => {
        return await chatRepository.deleteChat(chatId);
    },
    addMemberIntoChat: async (memberId, chatId) => {
        return await chatMembersRepository.addMemberIntoChat(memberId, chatId);
    },
    addMembersIntoChat: async (members, chatId) => {
        for (let member of members) {
            await chatMembersRepository.addMemberIntoChat(member.id, chatId);
        }
        return true;
    },
    deleteMembersFromChat: async (members, chatId) => {
        for (let member of members) {
            await chatMembersRepository.deleteMemberFromChat(member.id, chatId);
        }
        return true;
    },
    getAllMembersFromChat: async (chatId) => {
        return await chatMembersRepository.getAllMembersFromChat(chatId);
    }
}

module.exports = chatService