var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var tokens = [];

//set the static route
app.use('/public', express.static('public'));

http.listen(8887, function() {
	console.log('Server active on port 8887');
});