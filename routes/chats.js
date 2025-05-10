let express = require('express');
let router = express.Router();
let messageService = require('../services/messageService');
let chatService = require('../services/chatService');

router.get('/', function (req, res, next) {
    let userId = req.session.user.id;
    chatService.getAllChats(userId)
        .then((chats) => {
            res.send(chats)
        })
        .catch((error) => {
            res.send(error)
        })
})

router.get('/:id', function (req, res, next) {
    let chatId = req.params.id;
    chatService.getChat(chatId)
        .then((chat) => {
            res.send(chat)
        })
        .catch((error) => {
            res.send(error)
        })
})

router.post('/', function (req, res, next) {
    let userId = req.session.user.id;
    let chat = {
        name: req.body.name,
        description: req.body.description,
        logo_url: req.body.logo_url,
    }
    chatService.createChat(chat)
        .then(async (chat) => {
            await chatService.addMemberIntoChat(userId, chat.id)
            res.send(chat);
        })
        .catch((error) => {
            res.send(error);
        })
})

router.put('/:id', function (req, res, next) {
    let userId = req.session.user.id;
    let chat = {
        id: req.params.id,
        name: req.body.name,
        description: req.body.description,
        logo_url: req.body.logo_url,
    }
    chatService.updateChat(userId, chat)
        .then((chat) => {
            res.send(chat);
        })
        .catch((error) => {
            res.send(error);
        })
})

router.delete('/:id', function (req, res, next) {
    chatService.deleteChat(req.params.id).then((res) => {
        res.send(res)
    })
})


router.post('/:id/members', function (req, res, next) {
    let chatId = req.params.id;
    let members = req.body.members
    chatService.addMembersIntoChat(members, chatId)
        .then((res) => {
            res.send(res);
        })
        .catch((error) => {
            res.send(error);
        })
})

router.delete('/:id/members', function (req, res, next) {
    let chatId = req.params.id;
    let members = req.body.members
    chatService.deleteMembersFromChat(members, chatId)
        .then((res) => {
            res.send(res);
        })
        .catch((error) => {
            res.send(error);
        })
})

router.get('/:id/members', function (req, res, next) {
    let chatId = req.params.id;
    chatService.getAllMembersFromChat(chatId)
        .then((members) => {
            res.send(members);
        })
        .catch((error) => {
            res.send(error);
        })
})

router.get('/:id/messages', function (req, res, next) {
    let chatId = req.params.id;
    messageService.getMessageByChatId(chatId)
        .then((messages) => {
            res.send(messages);
        })
        .catch((error) => {
            res.send(error);
        })
})

router.post('/:id/messages', function (req, res, next) {
    let chatId = req.params.id;
    let userId = req.session.user.id;
    let message = req.body.message;

    messageService.insertMessage(message, userId, chatId)
        .then((messageData) => {
            req.app.io.to(chatId).emit('send-message', {
                chatId: chatId,
                userId: userId,
                username: req.session.user.username,
                message: message,
            })
            res.send(message);
        })
        .catch((error) => {
            res.send(error);
        })
})

module.exports = router;