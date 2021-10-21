const { MongoClient } = require('mongodb');
const mongoConnection = new MongoClient(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true });
const schemas = require('./schemas')

const DataBase = function () {
  
  this.mongoDB = {};
  this.responseDB = {
    operation : {},
    error : {}
  };
  this.collection = '';
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
    ['documents' , []],
    ['newData' , {}],
    ['manyDocuments' , false],
    ['field', ''],
    ['filter', {}],
    ['getDocumentOptions', {}],
    ['newDoc', undefined]
  ];
  this.filter = {};
  this.flushFlag = false;
  this.getDocumentOptions = {};
  this.newDoc;

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

  this.saveData = async function (collection = this.collection, data = this.data, manyDocuments = this.manyDocuments) {

    const mongoCollection = this.mongoDB.collection(`${collection}`);
    
    try {
      if(manyDocuments){
        const options = { ordered: true };
        this.responseDB.operation = await mongoCollection.insertMany(data, options);
      } else {
        this.responseDB.operation = await mongoCollection.insertOne(data);
      };
    } catch (error) {
      this.responseDB.error = error;
      console.log(error);
    }

    const response = this.responseDB;

    if(this.flushFlag){
      this.flushData();
    };

    return response;
  };

  this.updateDoc = async function (collection = this.collection, field = this.field, value = this.value, filter = this.filter) {

    const mongoCollection = this.mongoDB.collection(collection);

    try {
      const updateDocument = {
        [`${operator}`] : {
          [`${field}`] : `${value}`
        }
      };
      this.responseDB.operation = await mongoCollection.updateOne(filter, updateDocument);
      console.log(`
        Success at updateDoc
      `);
    } catch (error) {
      this.responseDB.error = error;
      console.log(`
        Error at updateDoc:
        ${error}
      `);
    };

    const response = this.responseDB;

    if(this.flushFlag){
      this.flushData();
    };

    return response;

  };

  this.updateDocs = async function (collection = this.collection, filter = this.filter, operator = this.operator , newDocs = this.newDocs) {

    const mongoCollection = this.mongoDB.collection(collection);

    try {
      const updateDocument = {
        [`${operator}`] : {
          ...newDocs
        }
      };
      this.responseDB.operation = await mongoCollection.updateMany(filter, updateDocument);
      console.log(`
        Success at updateDoc
      `);
    } catch (error) {
      this.responseDB.error = error;
      console.log(`
        Error at updateDocs:
        ${error}
      `);
    };
    
    const response = this.responseDB;

    if(this.flushFlag){
      this.flushData();
    };

    return response;
  };

  this.replaceDocs = async function (collection = this.collection, filter = this.filter, newDoc = this.newDoc) {

    const mongoCollection = this.mongoDB.collection(`${collection}`);

    try {
      this.responseDB.operation =  mongoCollection.replaceOne(filter, newDoc);
    } catch (error) {
      this.responseDB.error = error;
      console.log(`
        Error at replaceDocs:
        ${error}
      `);
    };

    const response = this.responseDB;

    if(this.flushFlag){
      this.flushData();
    };

    return response;
  };

  this.getMongoCollection = async function (collection = this.collection) {

    const mongoCollection = this.mongoDB.collection(collection);
    
    try {
      const cursor = await mongoCollection.find();
      const docsFinded = await cursor.count();
      if(docsFinded){
        await cursor.forEach(doc => { this.documents = [...this.documents, doc]});
      } else {
        this.responseDB.operation.message = 'Empty collection';
      } ;
      this.responseDB.operation = this.documents;
    } catch (error) {
      this.responseDB.error = error;
      console.log(`
        Error at getMongoCollection:
        ${error}
      `);
    };
    
    const response = this.responseDB;

    if(this.flushFlag){
      this.flushData();
    };

    return response;
  };

  this.getDocument = async function (collection = this.collection, filter = this.filter, options = this.getDocumentOptions) {

    const mongoCollection = this.mongoDB.collection(collection);

    try {
      this.responseDB.operation = await mongoCollection.findOne(filter, options);
    } catch (error) {
      this.responseDB.error = error;
      console.log(`
        Error at getDocument:
        ${error}
      `);
    };
    

    const response = {...this.responseDB.operation};

    if(this.flushFlag){
      this.flushData();
    };

    console.log(response)

    return response;
  };

  this.getManyDocuments = async function (collection = this.collection, filter = this.filter, options = this.getDocumentOptions) {
    const mongoCollection = this.mongoDB.collection(collection);
    try {
      const cursor = await mongoCollection.find(filter, options);
      const docsFinded = await cursor.count();
      if(docsFinded){
        await cursor.forEach(doc => { this.documents = [...this.documents, doc]});
      } else {
        this.responseDB.operation.message = 'No matches found ';
      } ;
      this.responseDB.operation = this.documents;
    } catch (error) {
      this.responseDB.error = error;
      console.log(`
        Error at getDocument:
        ${error}
      `);
    };
    
    const response = this.responseDB;

    if(this.flushFlag){
      this.flushData();
    };

    return response;
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

};

module.exports = DataBase;