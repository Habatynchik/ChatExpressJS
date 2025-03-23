const express = require('express');
const messagesRepository = require("../repositories/messagesRepository");
const router = express.Router();

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const messages = await messagesRepository.getAllMessages()
  res.send(messages)
});

module.exports = router;
