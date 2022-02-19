const express = require('express');

const flatController = require('./controller/flat.controller');

const app = express();
app.use(express.json());

app.use('/flat', flatController);
module.exports = app;