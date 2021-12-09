/**
 * TO-DO: Mix schema prototype and Data Base functions, in such away, one function could analyze data and save data if it's valid.
 */

const Products = require('./store/Products');
const UserCredentials = require('./user/UserCredentials');
const UserRegistry = require('./user/UserRegistry');

module.exports = {
  Products,
  UserCredentials,
  UserRegistry
};