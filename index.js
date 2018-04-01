const express = require('express'),
    app = express(),
    passport = require('passport'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    path = require('path'),
    env = require('dotenv').load(),
    cors = require('cors'),
    exphbs = require('express-handlebars');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

const flash=require("connect-flash");
app.use(flash());

app.use('/', express.static(path.join(__dirname, 'client', 'build')));

app.get('/*', function(req, res){
    res.sendFile(__dirname + '/client/build/index.html');
});

//Routes
const authRoute = require('./app/routes/auth')(app, passport);

//Models
const models = require('./app/models');



require('./app/config/passport/passport.js')(passport, models.user);

models.sequelize.sync().then(function() {
    console.log('Nice! Database looks fine');
}).catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!");
});

app.listen(5000, () => {
    console.log('Secure Chat app is listening on port 5000');
});

