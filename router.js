const express = require('express');
const Router = express.Router();

Router.use('/commonjsmoduleexports', require('./routes/defaultExports'));
Router.use('/commonjsmoduleexports', require('./routes/namedExports'));

module.exports = Router;
