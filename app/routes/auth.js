const authController = require('../controllers/authController');

module.exports = function(app, passport) {
    app.get('/signUp', (req, res) => authController.signup(req, res));

    app.get('/dashboard', isLoggedIn, authController.dashboard);

    /*app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/home',
        failureRedirect: '/signup'
    }));*/

    app.post('/signup', (req, res, next) => {
        passport.authenticate('local-signup', (err, user, errMsg) => {
            console.log('errMsg:', errMsg);

            if(errMsg) {
                res.send(JSON.stringify(errMsg));
            } else {
                req.logIn(user, function(err) {
                    if (err) { return next(err); }
                    return res.send(JSON.stringify(user));
                });
            }
        })(req, res, next);
    });

    app.post('/signupCompleted', (req, res, next) => {
       console.log('signupCompleted::::', req.body);
       authController.signupCompleted(req, res);
    });

    app.post('/signin', (req, res, next) => {
        passport.authenticate('local-signin', (err, user, errMsg) => {
            console.log('errMsg:', errMsg);

            if(errMsg) {
                res.send(JSON.stringify(errMsg));
            } else {
                req.logIn(user, function(err) {
                    if (err) { return next(err); }
                    console.log('heres the user:', JSON.stringify(user));
                    return res.send(JSON.stringify(user));
                });
            }
        })(req, res, next);
    });

    app.post('/currentUser', (req, res) => {
        authController.currentUser(req, res);
    });

    app.post('/isAuth', (req, res) => {
        res.send(JSON.stringify({authenticated: isLoggedIn(req, res)}))
    });

    app.post('/logout', (req, res) => {
        authController.logout(req, res);
    });
}

function isLoggedIn(req, res) {
    if (req.isAuthenticated()){
        console.log('logged in!!');
        return true;
    } else {
        console.log('Not logged in!!');
        return false;
    }
}