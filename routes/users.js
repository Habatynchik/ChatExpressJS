let express = require('express');
let router = express.Router();
let userRepository = require('../repositories/userRepository');

router.get('/', async function(req, res, next) {
  try {
    const users = await userRepository.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/available/:chatId', async function(req, res, next) {
  try {
    const chatId = req.params.chatId;
    const availableUsers = await userRepository.getAllUsersNotInChat(chatId);
    res.json(availableUsers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
