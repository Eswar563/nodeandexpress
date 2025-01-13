const express = require('express');
const route = express.Router();
const defaultExports  = require('../controllers/defaultExports');

route.get('/defaultexports', defaultExports);

module.exports = route;
