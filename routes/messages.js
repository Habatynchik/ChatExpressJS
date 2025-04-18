let express = require('express');
const {getAllMessages} = require("../repositories/messageRepository");
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(getAllMessages())
});

module.exports = router;
