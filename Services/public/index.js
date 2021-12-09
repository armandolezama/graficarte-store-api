const express = require('express');
const router = express.Router();

const login = require('./controllers/login');
const signIn = require('./controllers/signin');
const publicStore = require('./controllers/store');

module.exports = dataBase => {
  router.get('/store', publicStore(dataBase));
  router.post('/login', login(dataBase));
  router.post('/signin', signIn(dataBase));
  return router
};

/**
 * TO-DO: Add email verification
 * source: https://www.it-swarm-es.com/es/node.js/como-confirmar-la-direccion-de-correo-electronico-con-express-node/826884182/
 */