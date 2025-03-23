const express = require('express');
const router = express.Router();
const authService = require('../services/authService');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function(req, res, next) {
  res.render('login', {error: null});
});

router.post('/login', async function (req, res, next) {
  try {
    await authService.auth(req, req.body.username, req.body.password);
    res.redirect('/');
  } catch (error) {
    res.render('login', {error});
  }
});

router.get("/logout", async (req, res) => {
  try {
    const result = await authService.logout(req);
    res.redirect('/');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/register', function(req, res, next) {
  res.render('register', {error: null});
});

router.post('/register', async function(req, res, next) {
  try {
    await authService.createUser(req.body.username, req.body.password)
    await authService.auth(req, req.body.username, req.body.password);
    res.redirect('/');
  } catch (error) {
    res.render('register', {error});
  }
});

module.exports = router;
