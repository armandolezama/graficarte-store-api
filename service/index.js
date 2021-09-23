const express = require('express');
const router = express.Router();
const cors = require('cors');
const public = require('./public');

router.use(express.json());
router.use(cors());


module.exports = dataBase => {
  
  router.use('/public', public(dataBase));
  return router
};