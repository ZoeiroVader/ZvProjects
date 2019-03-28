var express = require('express');
var app = express();

var consign = require('consign');
consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .into(app);

app.set('view engine', 'ejs');
app.set('views', './app/views');

module.exports = app;