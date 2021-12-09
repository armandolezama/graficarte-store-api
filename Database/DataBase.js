const { MongoClient } = require('mongodb');
const config = require('../utils/config');
const mongoConnection = new MongoClient(config.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true });
const schemas = require('./schemas');

const DataBase = function () {
  
  this.mongoDB = {};
  this.responseDB = {
    operation : {},
    error : {}
  };
  this.collection = '';
  this.location = '';
  this.documents = [];
  this.newData = {};
  this.manyDocuments = false;
  this.models = schemas;
  this.field = '';
  this.fields = [
    [
      'responseDB', 
      {
        operation : {},
        error : {}
      }
    ],
    ['collection' , ''],
    ['location', ''],
    ['documents' , []],
    ['newData' , {}],
    ['manyDocuments' , false],
    ['field', ''],
    ['filter', {}],
    ['getDocumentOptions', {}],
    ['newDoc', () => {}],
  ];
  this.filter = {};
  this.flushFlag = false;
  this.getDocumentOptions = {};
  this.newDoc = () => {};
  this.operation = async () => {};

  this.connect = async function () {
    try {
      await mongoConnection.connect();
      this.mongoDB = mongoConnection.db(config.DATABASE_NAME)
      console.log('connected with mongo');
    } catch (error) {
      console.log('Error at mongo connection')
      console.log(error)
    }
  };

  this.saveData = async function (collection = this.collection, data = this.data, manyDocuments = this.manyDocuments) {
    
    this.operation = async () => {
      const mongoCollection = this.mongoDB.collection(collection);
      let response = {};
      if(manyDocuments){
        const options = { ordered: true };
        response = await mongoCollection.insertMany(data, options);
      } else {
        response = await mongoCollection.insertOne(data);
      }
      return response;
    }

    return this.dataBaseFunction();
  };

  this.updateDoc = async function (collection = this.collection, field = this.field, value = this.value, filter = this.filter) {

    this.operation = async () => {
      const mongoCollection = this.mongoDB.collection(collection);
      const updateDocument = {
        [`${operator}`] : {
          [`${field}`] : `${value}`
        }
      };
      return await mongoCollection.updateOne(filter, updateDocument);
    }

    return this.dataBaseFunction();
  };

  this.updateDocs = async function (collection = this.collection, filter = this.filter, operator = this.operator , newDocs = this.newDocs) {

    this.operation = async () => {
      const mongoCollection = this.mongoDB.collection(collection);
      const updateDocument = {
        [`${operator}`] : {
          ...newDocs
        }
      };
      return await mongoCollection.updateMany(filter, updateDocument);
    }

    return this.dataBaseFunction();
  };

  this.replaceDocs = async function (collection = this.collection, filter = this.filter, newDoc = this.newDoc) {

    this.operation = async () => {
      const mongoCollection = this.mongoDB.collection(collection);
      return mongoCollection.replaceOne(filter, newDoc);
    };

    return this.dataBaseFunction();
  };

  this.getCollection = async function (collection = this.collection) {

    this.operation = async () => {

      const mongoCollection = this.mongoDB.collection(collection);

      let response  = {};

      const cursor = await mongoCollection.find();
      const docsFinded = await cursor.count();
      if(docsFinded){
        await cursor.forEach(doc => { this.documents = [...this.documents, doc]});
      } else {
        response.message = 'Empty collection';
      } ;
      response = { ...response , ...this.documents};

      return response;
    }

    return this.dataBaseFunction();
  };

  this.getDocument = async function (collection = this.collection, filter = this.filter, options = this.getDocumentOptions) {

    this.operation = async () => {
      const mongoCollection = this.mongoDB.collection(collection);
  
      return await mongoCollection.findOne(filter, options);
    }

    return this.dataBaseFunction();
  };

  this.getManyDocuments = async function (collection = this.collection, filter = this.filter, options = this.getDocumentOptions) {

    this.operation = async () => {

      const response = {};

      const mongoCollection = this.mongoDB.collection(collection);
      const cursor = await mongoCollection.find(filter, options);
      const docsFinded = await cursor.count();

      if(docsFinded){
        await cursor.forEach(doc => { this.documents = [...this.documents, doc]});
      } else {
        response.message = 'No matches found ';
      }

      response = {...response,  ...this.documents};

      return response;  
    }
    
    return this.dataBaseFunction();
  };

  this.flushData = function(dataFields = []) {
    if(dataFields.length > 0 && dataFields.length <= this.fields.length){
      
      const fieldsAreContained = this.fields.reduce((acc, curr) => acc + dataFields.includes( curr[0] ) ? 1 : 0, 0) === dataFields.length;

      if(fieldsAreContained){
        for (const field of dataFields) {
          const defaultValue = [...this.fields.filter(cleanField => {
            return cleanField[0] === field;
          })];
          this[field] = defaultValue[0][1];
        };
      };
    } else {
      for (const cleanField of this.fields) {
        this[cleanField[0]] = cleanField[1];
      };
    };
  };

  this.dataBaseFunction = async function(operation = this.operation, location = this.location){
    try {
      this.responseDB.operation = await operation();
    } catch (error) {
      this.responseDB.error = error;
      console.error(`
        Error at ${location}:
        ${error}
      `);
    }

    const response = this.responseDB;

    if(this.flushFlag){
      this.flushData();
    };

    return response;
  }

};

module.exports = DataBase;