'use strict';

var express = require('express');
var getters = require('./getPhotos');
var router = express.Router();

router.get('/allphotos', getters.getAllPhotos);

module.exports = router;
