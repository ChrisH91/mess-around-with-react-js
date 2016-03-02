/**
 * app.js
 *
 * The most basic of express apps, service static files from a folder
 */
var express = require('express');

var app = express();

app.use('/', express.static('public'));

app.listen(1337, function () {
  console.log('Listening on 1337');
});
