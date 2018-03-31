const authController = require('../controllers/authController');

module.exports = function(app, passport) {
    app.get('/signup', (req, res) => authController.signup(req, res));

    app.get('/signin', authController.signin);

    app.get('/dashboard', isLoggedIn, authController.dashboard);

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/home',
        failureRedirect: '/signup'
    }));

    app.post('/signin', (req, res) => {
        console.log('User wants to authenticate with params:', req.body);
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

    /*app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/dashboard',
        failureRedirect: '/signin'
    }));*/

    app.get('/logout', authController.logout);
}

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/signin');
}