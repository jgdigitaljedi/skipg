'use strict';

var express = require('express');
var posters = require('./uploadPhotos');
var router = express.Router();

router.post('/uploadphoto', posters.uploadPhoto);

module.exports = router;
