const { MongoClient } = require('mongodb');
const mongoConnection = new MongoClient(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true });
const UserCredentials = require('./schemas/user/UserCredentials.js');
const UserRegistry = require('./schemas/user/UserRegistry');
//const mongoDataBase = mongoConnection.db('graficarteDB');

const DataBase = function () {
  this.connect = async function () {
    try {
      await mongoConnection.connect();
      this.mongoDB = mongoConnection.db(process.env.DATABASE_NAME)
      console.log('connected with mongo');
    } catch (error) {
      console.log('Error at mongo connection')
      console.log(error)
    }
  };
  this.models = {
    UserCredentials,
    UserRegistry
  };
  this.saveData = async function (collection, data, manyDocuments) {
    const mongoCollection = this.mongoDB.collection(`${collection}`);
    if(manyDocuments){
      const options = { ordered: true };
      await mongoCollection.insertMany(data, options);
    } else {
      await mongoCollection.insertOne(data);
    };
  };
};

module.exports = DataBase;