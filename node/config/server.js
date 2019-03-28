var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var consign = require('consign');
consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .into(app);

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(bodyParser.urlencoded({extended: true}));

module.exports = app;