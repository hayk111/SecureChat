module.exports.signup = function(req, res) {
    var mess = req.flash('message');
    console.log('mess:', mess);
    res.render('signup');
}

module.exports.signin = function(req, res) {
    res.render('signin');
}

module.exports.dashboard = function(req, res) {
    res.render('dashboard');
}

module.exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        res.send(JSON.stringify({loggedOut: true}));
    });
}