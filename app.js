var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

// configure app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))


// use middleware
app.use(bodyParser());

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

app.post('/add', function(req, res) {
	var newItem = req.body.newItem;
	console.log(newItem);
})

app.listen(1337, function() {
	console.log('Server running at http://127.0.0.1:1337/');
});






// var http = require('http');
// http.createServer(function(req, res) {
// 	res.writeHead(200, {'Content-Type': 'text/plain'});
// 	res.end("Hello, world!\n");
// }).listen(1337, '127.0.0.1');
// console.log('Server running at http://127.0.0.1:1337/');