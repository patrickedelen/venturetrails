var express = require('express');
var app = express();
var http = require('http').Server(app);
 var dots = require("dot").process({path: "./views"});
      dots.mytemplate({foo:"hello world"});


//set the static route
app.use('/public', express.static('public'));

http.listen(8887, function() {
	console.log('Server active on port 8887');
});