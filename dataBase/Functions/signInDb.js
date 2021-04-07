const signInModel = require("../Schemas/signInModel");

const signInDb = dataBase => (request, response) => {
  dataBase.models.signInModel.save({
    userName: request.body.userName,
    salt: request.salt,
    verifier: request.body.verifier
  })

};

module.exports = signInDb;