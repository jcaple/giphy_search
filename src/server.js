'use strict';

const CONFIG = require('./lib/config');

let bodyParser = require('body-parser');
let express = require('express');
let logger = require('morgan');
let path = require('path');
let routes = require('./lib/routes/routes');
let app = express();

app.use(logger('combined'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(express.static(path.join(__dirname, 'htdocs')));

// CORS Support
app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type, x-access-token');

	if (req.method === 'OPTIONS') {
		res.writeHead(200, res.headers);
		res.end();
	} else {
		next();
	}
});

console.log("GIPHY API KEY: " + CONFIG.getGiphyAPIKey());

app.use(CONFIG.apiroot, routes);

let server = app.listen(CONFIG.port, function() {
	var port = server.address().port;
	console.log("Listening on port: %s", port);
});

module.exports = server;