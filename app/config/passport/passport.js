const bCrypt = require('bcrypt-nodejs');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = function(passport, user) {
	const User = user;
	const LocalStrategy = require('passport-local').Strategy;

	passport.use('local-signup', new LocalStrategy({
        usernameField: 'username',
        emailField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    }, function(req, username, password, done) {
		console.log('req:', req.body);
    	console.log('username:', username);
    	console.log('password:', password);
    	console.log('done:', done);

 		const generateHash = function(password) {
 			return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
		};

		const Op = Sequelize.Op;

		User.findOne({
		    where: {
		        [Op.or]: [{username: username}, {email: req.body.email}]
		    }
		}).then(function(user) {

		    if (user) {
		        return done(null, false, {message: 'Username taken'});
		    } else {
		        const userPassword = generateHash(password);
		 
		        var data = {
		        	username: username,
		            email: req.body.email,
		            password: userPassword
		        };

		        console.log('sign up data:', data);
		 
		        User.create(data).then(function(newUser, created) {
		            if (!newUser) {
		            	console.log('false');
		                return done(null, false);
		            } else {
		            	console.log('true!!!!');

		            	return done(null, newUser);
		            }
		        });
		 
		    }
			 
			});
		}
	));
	//LOCAL SIGNIN
	passport.use('local-signin', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
       usernameField: 'username',
       passwordField: 'password',
	   passReqToCallback: true // allows us to pass back the entire request to the callback
    }, function(req, uname, pass, done) {
		//console.log('signing in', uname, pass, done);
		const username = req.body.username;
        const password = req.body.password;

        const User = user;

        const isValidPassword = function(userpass, password) {
            return bCrypt.compareSync(password, userpass);
        };
 
        User.findOne({
            where: {
                [Op.or]: [{email: username}, {username}]
            }
        }).then(function(user) {
        	console.log('found the user:', user);
 
            if (!user) {
            	console.log('here1');
                return done(null, false, {
                    message: 'Username does not exist'
                });
            }
 
            if (!isValidPassword(user.password, password)) {
                console.log('here2');
                return done(null, false, {
                    message: 'Incorrect password'
                });
            }

            var userinfo = user.get();
            
            return done(null, userinfo);
        }).catch(function(err) {
            console.log("Error:", err);
            return done(null, false, {
                message: 'Something went wrong with your Signin'
            });
        });
	}));

	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done) {
 
	    User.findById(id).then(function(user) {
		   if (user) {
		       done(null, user.get());
		   } else {
		 	   done(user.errors, null);
		   }
		 
		});
	 
	});

}