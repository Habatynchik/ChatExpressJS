let express = require('express');
let router = express.Router();

let chatService = require('../services/chatService');

router.post('/create', function (req, res, next) {
    let chat = {
        name: req.body.name,
        description: req.body.description,
        logo_url: req.body.logo_url,
    }
    chatService.createChat(chat)
        .then((chat) => {
            res.send(chat);
        })
        .catch((error) => {
            res.send(error);
        })
})
router.put('/:id/update', function (req, res, next) {
    let chat = {
        id: req.params.id,
        name: req.body.name,
        description: req.body.description,
        logo_url: req.body.logo_url,
    }
    chatService.updateChat(chat)
        .then((chat) => {
            res.send(chat);
        })
        .catch((error) => {
            res.send(error);
        })
})
router.delete('/:id/delete', function (req, res, next) {
})
router.post('/:id/add-member', function (req, res, next) {
})
router.delete('/:id/remove-member', function (req, res, next) {
})
router.get('/:id/members', function (req, res, next) {
})

module.exports = router;