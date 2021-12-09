const express = require('express');
const router = express.Router();
const cors = require('cors');
const public = require('./public');
const clientFunctions = require('./client');
const adminFunctions = require('./admin');

router.use(express.json());
router.use(cors());


module.exports = dataBase => {
  
  router.use('/public', public(dataBase));
  router.use('/client', clientFunctions(dataBase));
  router.use('/admin', adminFunctions(dataBase));
  return router
};