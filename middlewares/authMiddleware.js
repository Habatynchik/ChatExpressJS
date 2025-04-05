module.exports = (req, res, next) => {
    res.locals.user = req.session.user;

    if ((req.path === '/auth/login' || req.path === '/auth/register')
        && req.session.user) {
        res.redirect('/');
    }
    if (req.path === '/auth/login' || req.path === '/auth/register') {
        return next()
    }
    if (!req.session.user) {
        res.redirect('/auth/login');
    }
    next()
}