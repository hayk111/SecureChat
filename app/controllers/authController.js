const models = require('../models');

const User = models.user;
const PrifileInfo = models.profile_info;

module.exports.signup = function(req, res) {
    var mess = req.flash('message');
    console.log('mess:', mess);
    res.render('signup');
}

module.exports.signupCompleted = function(req, res) {
    console.log('steeee', PrifileInfo, User, req.body);
    User.findOne({ where: {username: req.body.username} })
        .then((user) => {
            //PrifileInfo user.id
        });
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