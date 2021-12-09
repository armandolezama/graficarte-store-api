const express = require('express');
const router = express.Router();

const getProducts = require('./controllers/getProducts');
const createProducts = require('./controllers/createProducts');
const updateProducts = require('./controllers/updateProducts');
const deleteProducts = require('./controllers/deleteProducts');

/**
 * TO-DO: Create admin functionality
 */

module.exports = dataBase => {
  
  router.get('/', getProducts(dataBase));
  router.post('/', createProducts(dataBase));
  router.put('/', updateProducts(dataBase));
  router.delete('/', deleteProducts(dataBase));
  
  return router
};