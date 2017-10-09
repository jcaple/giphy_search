'use strict';

const CONFIG = require('./lib/config');

let express = require('express');
let path = require('path');
let logger = require('morgan');
//let _ = require('lodash');
let app = express();
let env = CONFIG.env; 

//app.use(logger(env));
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

let server = app.listen(CONFIG.port, function() {
	var port = server.address().port;
	console.log("Listening on port: %s", port);
});

module.exports = server;