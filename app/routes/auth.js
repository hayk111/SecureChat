const authController = require('../controllers/authController');

module.exports = function(app, passport) {
    app.get('/signUp', (req, res) => authController.signup(req, res));

    app.get('/dashboard', isLoggedIn, authController.dashboard);

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/home',
        failureRedirect: '/signup'
    }));

    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/home',
        failureRedirect: '/signin'
    }));

    app.post('/isAuth', (req, res) => {
        res.send(JSON.stringify({authenticated: isLoggedIn(req, res)}))
    });

    /*app.post('/signup', (req, res, next) => {
    	console.log('here comes 1');
    	passport.authenticate('local-signup', (err, user, errMsg) => {
	    	if(errMsg) {
	    	    console.log('11111');
	    		console.log('Error message:', errMsg.message);
	    		res.send(JSON.stringify(errMsg));
	    	} else {
                console.log('22222');

                res.send(JSON.stringify(user));
	    	}
	    })(req, res, next);
    });*/

    app.post('/logout', authController.logout);
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