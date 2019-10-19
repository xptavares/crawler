var express = require('express');
var app = express();
var cors = require('cors');
var dotenv = require('dotenv').config()
const bodyParser = require('body-parser');
const morgan = require('morgan');
const config = require('config');

app.use(cors());
app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));
app.use(bodyParser.json({limit: '5mb'}));

app.use(morgan('dev'))

app.use('/api/v1', require('./src/api/controllers/index'));
app.use('/', require('./src/api/controllers/index'));

app.listen(config.http.port);

console.log('Start Crawler API - v.1.0.0 in ' + config.http.port, new Date());

module.exports = app;
