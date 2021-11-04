const express = require('express');
const app = express();
const config = require('./utils//config');
const service = require('./Service');
const { DataBase } = require('./Database');
const DB = new DataBase();
const helmet = require("helmet");

app.use(helmet());
app.use('/', service(DB));

app.listen(config.PORT, () => {
    console.log(`Iniciando servidor en ${config.PORT}`);
    console.log(`http://localhost:${config.PORT}`);
    console.log('Bieeeeen!! :)');
});

DB.connect().catch(error => {
    console.log('something went wrong with mongo');
    console.log(error);
});


