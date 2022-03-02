const express = require('express');
const app = express();
const config = require('./utils//config');
const service = require('./Services');
const DB = require('./Database');
const helmet = require("helmet");

app.use(helmet());
app.use('/', service(DB));

app.listen(config.PORT, () => {
    console.log(`Iniciando servidor en puerto ${config.PORT}`);
    console.log(`http://localhost:${config.PORT}`);
});
