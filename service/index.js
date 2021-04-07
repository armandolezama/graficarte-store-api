const express = require('express');
const router = express.Router();
const NodeCache = require( "node-cache" );
const nodeCacheInstance = new NodeCache();
const cors = require('cors');
const public = require('./public');
const login1 = require('./loginSRP/login1');
const login2 = require('./loginSRP/login2');

router.use(express.json());
router.use(cors());

router.use('/public', public)
router.use('/login1', login1(nodeCacheInstance));
router.use('/login2', login2(nodeCacheInstance));

module.exports = router;