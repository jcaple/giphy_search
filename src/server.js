'use strict';

const CONFIG = require('./lib/config');

let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let nocache = require('nocache');
let express = require('express');
let logger = require('morgan');
let path = require('path');
let routes = require('./lib/routes/routes');
let app = express();
let validatetoken = require('./lib/controllers/validatetoken');

app.use(nocache());
app.use(cookieParser());
app.use(logger('combined'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

// Specify server root
app.use(CONFIG.apiroot, routes);

let unless = function(path, middleware) {
    return function(req, res, next) {
    	console.log('\nPATH: ' + path);
    	console.log('\nreq.path: '+ req.path);
        if (req.path === '/login.html' || req.path === '/css/styles.css' 
        		|| req.path === '/js/login.js') {
            return next();
        } else {
            return middleware(req, res, next);
        }
    };
};

// Security Wrapper to for all incoming requests
app.use(unless('/*', validatetoken));

app.use(express.static(path.join(__dirname, 'htdocs'), {index: 'index.html'}));

app.use(function(req, res){
    res.sendStatus(404);
});

let server = app.listen(CONFIG.port, function() {
	var port = server.address().port;
	console.log("Listening on port: %s", port);
});

module.exports = server;