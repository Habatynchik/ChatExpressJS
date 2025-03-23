let express = require('express');
const {getAllMessages} = require("../model/messageRepository");
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(getAllMessages())
});

module.exports = router;
