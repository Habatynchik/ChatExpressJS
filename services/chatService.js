const chatRepository =  require("../repositories/chatRepository")

const chatService = {
    createChat: async (chat) => {
        return await chatRepository.createChat(chat);
    },
    addMemberIntoChat: async (chatId, memberId) => {

    }
}

module.exports = chatService