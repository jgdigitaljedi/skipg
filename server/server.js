/**
 * Main server file
 */
'use strict';

// setup dependencies and server
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = 3001;

// CORS portion, because who needs a library to do something this simple?
var allowCrossDomain = function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PATCH,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');

	next();
};

app.use(allowCrossDomain);

require('./routes')(app);

// Start server
server.listen(port, '0.0.0.0', function() {
	console.log('Express server listening on %d, in %s mode', port, app.get('env'));
});

// Expose app
exports = module.exports = app;
