const controllers = require('express').Router()
console.log('Start controller: find');
controllers.use('/find', require('./find.controller'))
controllers.use('/buscar', require('./find.controller'))
module.exports = controllers