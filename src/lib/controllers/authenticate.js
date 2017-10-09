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

	process.stdout.write('Authenticate User: ' + JSON.stringify(user));

	let token = jwt.sign(user, CONFIG.secret, {
		expiresIn: 28800 
	});

	// return the information including token as JSON
	res.json({
		success: true,
		message: 'Your token is valid for 8 hours',
		token: token
	});

};

module.exports = authenticateUserCredentials;
