require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const cors = require('cors');

//routes
const adminRoute = require('./routes/adminRoute');
const userRoute = require('./routes/userRoute');

//app settings
const app = express();
const port = process.env.PORT || 8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}));

//session settings
app.use(session({
    name: process.env.SESSION_NAME,
    secret: process.env.SESSION_SECRET,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    resave: false,
    saveUninitialized: true,
    maxAge: 1000 * 60 * 30 //30 mins
}));

app.listen(port, () => {
    console.log("API running at localhost:" + port);
});

//use routes
app.use('/', adminRoute);
app.use('/user', userRoute);