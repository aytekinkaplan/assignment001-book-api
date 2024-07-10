'use strict';
const express = require('express');
const app = express();

app.use(express.json());
require('express-async-errors');

app.use('/api/books', require('./app/routes/bookRouter'));

app.use(require('./app/middleware/bookMiddleware'));

module.exports = app;
