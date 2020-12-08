"use strict";

// require('dotenv').config();
var express = require('express');

var bodyParser = require('body-parser');

var session = require('express-session');

var path = require('path');

var mongoose = require('mongoose');

var MongoStore = require('connect-mongo')(session); //const cors = require('cors');
//routes


var adminRoute = require('./routes/adminRoute');

var userRoute = require('./routes/userRoute'); //app settings


var app = express();
var port = process.env.PORT || 8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express["static"](path.join(__dirname, 'frontend', 'build'))); // app.use(cors({
//     credentials: true,
//     origin: "http://localhost:3000"
// }));
//db connection for app (place before sessions for cookie persistence)

var connection = require('./db');

connection(); //session settings

app.use(session({
  name: process.env.SESSION_NAME,
  secret: process.env.SESSION_SECRET,
  store: new MongoStore({
    mongooseConnection: mongoose.connection
  }),
  resave: false,
  saveUninitialized: true,
  maxAge: 1000 * 60 * 30 //30 mins

}));
app.listen(port, function () {
  console.log("API running at localhost:" + port);
}); //use routes

app.use('/', adminRoute);
app.use('/user', userRoute);
