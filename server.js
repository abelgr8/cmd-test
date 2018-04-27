//Set port number
var PORT = process.env.PORT || 3000;

//Load Express
var express = require('express');
var app = express();

// Load Passport
var passport = require('passport');
LocalStrategy = require('passport-local').Strategy;

var env = require('dotenv').load();

//Load Handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));

//Load body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// For Passport
app.use(session({ secret: 'dunkirk', resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.get('/', function (req, res) {
    res.send('Welcome to Passport with Sequelize');
});

//Routing
var htmlRouter = require('./controllers/html-routes.js');
var apiRouter = require('./controllers/api-routes.js');
var authRoute = require('./controllers/auth.js')(app, passport);
// Be sure to create auth.js file in the controller folder

//Load Sequelize
var db = require("./models");

app.set('view engine', 'handlebars');


app.use(express.static('public'));

app.use('/',htmlRouter);
app.use('/api',apiRouter);

//load passport strategy
require('.config/passport/passport.js')(passport, models.user);
// Be sure to add passport.js file and folder


db.sequelize.sync({force:true}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
