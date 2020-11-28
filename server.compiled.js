"use strict";

// server.js
//
var express = require('express');

var path = require('path');

var app = express();
var PORT = process.env.HTTP_PORT || 4001;
app.use(express["static"](path.join(__dirname, 'frontend', 'build')));
app.get('/', function (req, res) {
  res.send('just gonna send it');
});
app.get('/flower', function (req, res) {
  res.json({
    name: 'Dandelion',
    colour: 'Blue-ish'
  });
});
app.listen(PORT, function () {
  console.log("Server listening at port ".concat(PORT, "."));
});
