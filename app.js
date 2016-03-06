var express = require('express');
var path = require('path');
var app = express();

// configure app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))


// use middleware


// define routes
app.get('/', function(req, res) {
	// res.send('Hello, world!\n');
	// load data from DB here
	res.render('index', {
		title: 'My App',
		items: [
			{ id: 1, desc: 'Solki' },
			{ id: 2, desc: 'Yvonne' },
			{ id: 3, desc: 'Happy' }
		]
	});
});



app.listen(1337, function() {
	console.log('Server running at http://127.0.0.1:1337/');
});






// var http = require('http');
// http.createServer(function(req, res) {
// 	res.writeHead(200, {'Content-Type': 'text/plain'});
// 	res.end("Hello, world!\n");
// }).listen(1337, '127.0.0.1');
// console.log('Server running at http://127.0.0.1:1337/');