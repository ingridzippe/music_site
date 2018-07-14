"use strict";

var express = require('express');
var app = express();
var path = require('path');
const https = require('https');
const http = require('http');

// function to poke the heroku server
// setInterval(function() {
//     http.request('https://greve-chocolatine-34680.herokuapp.com/', console.log("server poked")).end();
// }, 300000); // every 5 minutes (300000)

var exphbs = require('express-handlebars');
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function(req, res) {
  res.render('index')
});

var port = process.env.PORT || 8080;
app.listen(port);
console.log('Express started. Listening on port %s', port);
