let express = require('express');
let router = express.Router();
let authService = require('../services/authService')

router.get('/login', function(req, res, next) {
    res.render('login', {error: null});
});

router.post('/login', async function (req, res, next) {
    let username = req.body.username;
    let password = req.body.password;
    try {
        let user = await authService.authenticate(username, password);
        res.send(user);
    } catch (error) {
        res.render('login', {error: error.message});
    }
});

router.get('/register', function(req, res, next) {
    res.render('register');
});

router.post('/register', async function (req, res, next) {
    let username = req.body.username;
    let password = req.body.password;
    let user = await authService.register(username, password);
    res.send(user);
});

module.exports = router;
