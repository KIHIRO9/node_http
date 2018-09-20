var express = require('express');
var app = express();
app.get('/', function(req, res) {
    res.send('「こんにちは世界」');
});

var server = app.listen(8000, function() {});