var request = require('supertest');
var assert = require('chai').assert;

describe('testing user authentication', function() {
	var server;
	beforeEach(function(done) {
		delete require.cache[require.resolve('../src/server')];
		server = require('../src/server');
		done();
	});

	afterEach(function(done) {
		server.close(done);
	});

	it('returns authentication token', function test(done) {
		var auth = {
	   		"email": "kraken@yahoo.com",
	   		"password": "password",
		};

		request(server).post('/api/authenticate').send(auth)
			.expect('Content-Type', 'application/json')
			.end(function(err, result) {
				assert.equal(result.body.success, true);
				assert.equal(result.body.message, "Your token is valid for 8 hours");
				done();
			});
	});

});
