'use strict';

const CONFIG = require('../config');
const jwt = require('jsonwebtoken');

const ValidateToken = function(req, res, next) {

	//const token = req.headers['x-access-token'];
	const cookie = req.cookies;
	const token = (cookie['jcaple007-giphy_search'] === undefined) ? null : cookie['jcaple007-giphy_search'];

	console.log('**** Cookie -> ' + token);

	if (token) {
	    try {
			let decoded = "";
			try {
		      	decoded = jwt.verify(token, CONFIG.secret);
			} catch (e) {
				console.log('ERROR in ValidateToken: ' + e.message + ' REDIRECTION to LOGIN');
				res.writeHead(301,
				   {Location: 'http://' + CONFIG.host + ':' + CONFIG.port + '/login.html'}
			 	);
				res.end();
			}

			// TODO: lookup email in an auth database and compare passwords
			let decodedUserEmail = decoded.email;

			console.log('REQUEST URL: ' + req.originalUrl);
			if (req.originalUrl === '/login.html') {
				res.redirect('/index.html');
				res.end();
			} 

			next();

	    } catch (err) {
			console.log("ERROR: " + err);
	      	res.status(500);
	      	res.json({
	        	"status": 500,
	        	"message": "Oops something went wrong"
	        });
	    }	
	} else {
		console.log('******* No Cookie Present!!');
		res.writeHead(301,
			{Location: 'http://' + CONFIG.host + ':' + CONFIG.port + '/login.html'}
	 	);
		res.end();

	}
};

module.exports = ValidateToken;
