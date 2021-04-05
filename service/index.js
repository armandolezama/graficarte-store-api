const express = require('express');
const router = express.Router();
const cors = require('cors');
const user = require('./user')

router.use(express.json());
router.use(cors());

router.use('/user', user)

module.exports = router;