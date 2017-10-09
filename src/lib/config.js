'use strict';

const CONFIG = {
	// App Config
	host: 'localhost',
	port: 8000,
	env: 'DEV',
	version: '0.0.1',
	secret: 'l0phtingAndShippingCode',
	'apiroot': '/api',

	// Giphy API Configuration 
	getGiphyAPIKey: function() {
		// Set the API key as an environment variable
		return process.env.GIPHY_API_KEY;
	},
	Giphy_URL: 'https://api.giphy.com/v1/gifs/search'
};

module.exports = CONFIG;