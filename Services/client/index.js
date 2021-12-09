const express = require('express');
const router = express.Router();

/**
 * TO-DO: Create client functionality
 */

const getOrders = require('./controllers/getOrders');
const createOrder = require('./controllers/createOrder');
const updateOrder = require('./controllers/updateOrder');
const cancelOrder = require('./controllers/cancelOrder');
const getUserConfig = require('./controllers/getUserConfig');
const setUserConfig = require('./controllers/setUserConfig');

module.exports = dataBase => {
  router.get('/', getOrders(dataBase));
  router.get('/', getUserConfig(dataBase));
  router.post('/', createOrder(dataBase));
  router.patch('/', updateOrder(dataBase));
  router.patch('/', setUserConfig(dataBase));
  router.delete('/', cancelOrder(dataBase));
  
  return router
};