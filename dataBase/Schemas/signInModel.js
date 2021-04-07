const Mongoose = require('mongoose');

const signInModel = Mongoose.Schema({
  userName: String,
  salt: String,
  verifier: String
});

module.exports = signInModel;