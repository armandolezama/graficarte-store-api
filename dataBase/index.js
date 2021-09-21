const express = require('express');
const dataBaseService = express.Router();
const DataBase = require('./DataBase.js');



module.exports = {
  dataBaseService,
  DataBase
};