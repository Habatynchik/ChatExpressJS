const messageRepository = require('../repositories/messageRepository')

const messageService = {
    insertMessage: async (message, userId, chatId) => {
        return await messageRepository.insertMessage(message, userId, chatId);
    },
    getMessageByChatId: async (chatId) => {
        return await messageRepository.getMessageByChatId(chatId);
    },
}

module.exports = messageService