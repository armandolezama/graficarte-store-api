const Mongoose = require('mongoose');
const signInModel = require('./Schemas/signInModel')

const dataBase = {
  connect : async () => {
    await Mongoose.connect(process.env.MONGO_DB, { useUnifiedTopology: true, useNewUrlParser: true })
    console.log('connected with mongo');
  },
  models: {
    signInModel: Mongoose.model('signInModel', signInModel)
  }
}

module.exports = dataBase;