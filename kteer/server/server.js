var express = require('express');
var mongoose = require('mongoose');
var server = require('http').createServer(app);
var morgan = require('morgan')
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser'); //unsure if needed, may remove
var session = require('express-session')
var passport = require('passport');
var path = require('path');
var FacebookStrategy = require('passport-facebook').Strategy;
var config = require('./../secrets.js');

var api = require('./api');

const User = require('./schemas/users');

var app = express();

////////////////auth part 1/////////////////
passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

// config
passport.use(new FacebookStrategy({
  clientID: config.facebook.clientID,
  clientSecret: config.facebook.clientSecret,
  callbackURL: config.facebook.callbackURL
},
  function (accessToken, refreshToken, profile, done) {
    User.findOne({ oAuth: profile.id }, function (err, user) {
      if (err) {
        console.log(err);  // handle errors!
      }
      if (!err && user !== null) {
        done(null, user);
      } else {
        user = new User({
          oAuth: profile.id,
          name: profile.displayName,
          created: Date.now()
        });
        user.save(function (err) {
          if (err) {
            console.log(err);  // handle errors!
          } else {
            console.log("saving user ...");
            done(null, user);
          }
        });
      }
    });
  }
));


//////////middleware//////////////
app.use(morgan('tiny'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'LOLOLOLOLOLOL HAXORZZSS123',
  resave: true,
  saveUninitialized: true }));
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

app.get('/auth/userdata', function (req, res) {
  if (req.isAuthenticated()) {
    console.log(req.session.passport.user);
    res.json(req.session.passport.user);
  } else {
    console.log('not logged in');
    res.json(0);
  }
  
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

app.all("/*", function (req, res, next) {
  res.sendFile("index.html", { root: __dirname + "./../dist/" });
});

////////////////////server////////////////////////////
var port = process.env.PORT || 3000;//

app.listen(port, function () {
  console.log(' app listening on port 3000!');//
});