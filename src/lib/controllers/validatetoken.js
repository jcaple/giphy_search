'use strict';

const CONFIG = require('../config');
const jwt = require('jsonwebtoken');

const ValidateToken = function(req, res, next) {

	const token = req.headers['x-access-token'];

	if (token) {
	    try {
			let decoded = "";
			try {
		      	decoded = jwt.verify(token, CONFIG.secret);
			} catch (e) {
				res.status(400);
				res.json({
				  "status": 400,
				  "message": "Invalid Token"
				});
				return;
			}

			// TODO: lookup email in an auth database and compare passwords
			let decodedUserEmail = decoded.email;

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
	  	res.status(401);
		res.json({
	  		"status": 401,
	  		"message": "Invalid Token or Key"
		});
		return;
	}
};

module.exports = ValidateToken;
