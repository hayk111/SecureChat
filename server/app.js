const express = require('express'),
      routes = require('./routes'),
      app = express(),
      user = require('./routes/user'),
      path = require('path'),
      db = require('./models'),
      http = require('http'),
      passport = require('passport'),
      passportConfig = require('./config/passport'),
      home = require('./routes/home'),
      application = require('./routes/application');

app.use('/public', express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded());
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({ secret: 'aaaaaabbb'}));
app.use(passport.initialize());
app.use(passport.session());

app.listen(3000, () => {
    console.log('securechat server is listening on port 3000');
})

