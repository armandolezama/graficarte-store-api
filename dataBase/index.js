const express = require('express');
const router = express.Router();
const signInDb = require('./Functions/signInDb');
const dataBase = require('./dataBase.js');

router.use('/signInDb', signInDb(dataBase));


module.exports = router;