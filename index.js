const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const service = require('./service');

app.use('/', service);

app.listen(process.env.PORT, function(){
    console.log(`Iniciando servidor en ${process.env.PORT}`);
    console.log(`http://localhost:${process.env.PORT}`)
});