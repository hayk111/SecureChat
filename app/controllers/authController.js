const models = require('../models');
const fs = require('fs');

const User = models.user;
const ProfileInfo = models.profile_info;

module.exports.signup = function(req, res) {
    var mess = req.flash('message');
    res.render('signup');
}

module.exports.signupCompleted = function(req, res, next) {
    console.log('steeee777777', req.body.first_name, req.body.last_name);
    let profPic = req.body.profilePic;

    let imgName, imgRealName, imgFormat, base64Index;

    if(profPic.indexOf('default-avatar-boy.png') > -1) {
        imgRealName = 'default-avatar-boy.png';
    } else {
        base64Index = parseInt(profPic.indexOf('base64,'));
        imgFormat = profPic.substr(parseInt(profPic.indexOf('image/')) + 6, parseInt(profPic.indexOf(';')) - (parseInt(profPic.indexOf('image/')) + 6));
        profPic = profPic.substr(base64Index + 7);

       // console.log('prof pic here...', profPic);
        imgRealName = Math.floor(Math.random() * 1000000) + '_img.' + imgFormat;

        imgName = 'client/build/images/' + imgRealName;
        console.log('heeeeerrrrr');

        fs.writeFile(imgName, profPic, 'base64', function(err) {
            console.log(err);
        });
    }
   
    console.log('imgRealName:::', imgRealName);
    User.findOne({ where: {username: req.body.username} })
        .then((user) => {
            //ProfileInfo user.id

            ProfileInfo.findOrCreate({
                where: {
                    user_id: user.id
                },
                defaults: {
                    user_id: user.id,
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    profile_pic: imgRealName
                }
                
            }).then((user2) => {
                console.log('user is2:', user);
                req.logIn(user, function(err) {
                    if (err) { console.error(err); return; }
                    console.log('heres the user2:', JSON.stringify(user));
                    return res.send(JSON.stringify({response: 'ok', user}));
                });

                //res.send(JSON.stringify({response: 'ok', user}));
            });

            
        });
}

module.exports.currentUser = function(req, res) {
    console.log('find user:', req.user.id);
    User.hasMany(ProfileInfo, {foreignKey: 'user_id'});
    ProfileInfo.belongsTo(User, {foreignKey: 'user_id'});

    ProfileInfo.find({ where: {user_id: req.user.id}, include: [User]})
        .then((user) => {
            res.send(JSON.stringify({user}));
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