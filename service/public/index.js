const express = require('express');
const router = express.Router();

const login = require('./functions/login');
const signIn = require('./functions/signin');
const publicStore = require('./functions/store');

router.get('/store', publicStore);
router.post('/login', login);
router.post('/signin', signIn);

module.exports = router;