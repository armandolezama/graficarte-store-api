const DataBase = require('./DataBase.js');

const DBInstance = new DataBase();

DBInstance.connect();

module.exports = DBInstance;