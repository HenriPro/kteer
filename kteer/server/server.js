var express = require('express');
var mongoose = require('mongoose');
var server = require('http').createServer(app);
var morgan = require('morgan')
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser'); //unsure if needed, may remove
var session = require('express-session')
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var config = require('./../secrets.js');

var api = require('./api');

var app = express();

////////////////auth part 1/////////////////
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

// config
passport.use(new FacebookStrategy({
  clientID: config.facebook.clientID,
  clientSecret: config.facebook.clientSecret,
  callbackURL: config.facebook.callbackURL
  },
  function(accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
      return done(null, profile);
    });
  }
));


//////////middleware//////////////
app.use(morgan('tiny'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'LOLOLOLOLOLOL HAXORZZSS123' }));
app.use(passport.initialize());
app.use(passport.session());


app.use(express.static(__dirname + '/../dist'));


/////////////////auth/////////////////////////////////////

app.get('/auth/facebook',
  passport.authenticate('facebook'),
  function (req, res) { });
app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/' }),
  function (req, res) {
    res.redirect('/');
  });

app.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});


/////////////////////database//////////////////////////
var mongoURI = 'mongodb://localhost/kteerdb';
mongoose.Promise = global.Promise;
mongoose.connect(mongoURI);
db = mongoose.connection;
db.once('open', function () {
  console.log('mongoDB is open');
});

app.use('/api', api);

app.get("*", () => {
  //TODO
})


////////////////////server////////////////////////////
var port = process.env.PORT || 3000;//

app.listen(port, function () {
  console.log(' app listening on port 3000!');//
});