const express = require('express');
const route = express.Router();
const namedExports  = require('../controllers/namedExports');

route.get('/namedexports', namedExports);

module.exports = route;
