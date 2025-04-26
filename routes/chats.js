let express = require('express');
let router = express.Router();

let chatService = require('../services/chatService');

router.post('/create', function(req, res, next) {
})
router.put('/:id/update', function(req, res, next) {
})
router.delete('/:id/delete', function(req, res, next) {
})
router.post('/:id/add-member', function(req, res, next) {
})

/*
    create chat
    update chat
    delete chat
    add member to chat
    remove member from chat
    get chat members
 */

module.exports = router;