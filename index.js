const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const service = require('./Service');
const { DataBase } = require('./Database');
const DB = new DataBase();

app.use('/', service(DB));

app.listen(process.env.PORT, () => {
    console.log(`Iniciando servidor en ${process.env.PORT}`);
    console.log(`http://localhost:${process.env.PORT}`)
});

DB.connect().catch(error => {
    console.log('something went wrong with mongo');
    console.log(error);
});


