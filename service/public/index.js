const express = require('express');
const router = express.Router();

const login = require('./functions/login');
const signIn = require('./functions/signin');
const publicStore = require('./functions/store');

module.exports = dataBase => {
  router.get('/store', publicStore(dataBase));
  router.post('/login', login(dataBase));
  router.post('/signin', signIn(dataBase));
  return router
};