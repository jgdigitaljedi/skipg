/**
 * Routing base module
 */

'use strict';

module.exports = function(app) {
	// here is where routes are defined and individual modules required for API
	app.use('/api/getphotos', require('./api/getPhotos'));
	app.use('/api/uploadphotos', require('./api/uploadPhotos'));
};
