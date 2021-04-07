const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const service = require('./service');
const dataBaseService = require('./dataBase');
const dataBase = require('./dataBase/dataBase');

app.use('/', service);
app.use('/dbm', dataBaseService);

app.listen(process.env.PORT, function(){
    console.log(`Iniciando servidor en ${process.env.PORT}`);
    console.log(`http://localhost:${process.env.PORT}`)
});

dataBase.connect().catch(error => {
    console.log('something went wrong with mongo');
    console.log(error);
})
