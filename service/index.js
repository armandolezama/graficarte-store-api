const express = require('express');
const router = express.Router();
const cors = require('cors');
const public = require('./public');



module.exports = (dataBase) => {
  
  router.use(express.json());
  router.use(cors());
  router.use('/public', public(dataBase));
  return router
};