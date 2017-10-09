'use strict';

const jwt = require('jsonwebtoken');
const CONFIG = require('../config');

// This Controller authenticates a user based on provided email and password.
// If authenticated, a JSON Web Token is issued to the client.

const authenticateUserCredentials = function(req, res, next) {

	let user = {};

	// Incoming credentials.  Don't check credentials, just
	// issue security token to any old user.
	user.email = req.body.email;
	user.password = req.body.password;

	let token = jwt.sign(user, CONFIG.secret, {
		expiresIn: 28800 
	});

	// Set cookie containing authentication token
	res.writeHead(200, {
    	'Set-Cookie': 'jcaple007-giphy_search=' + token + ';Path=/;Max-Age=3600',
    	'Content-Type': 'text/plain'
  	});

  	res.end();
};

module.exports = authenticateUserCredentials;
