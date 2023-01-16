const express = require('express');
const userController = require('./controller')
const route = express();


route.post('/user', userController.createUser);
route.get('/user', userController.getUser)


module.exports = route