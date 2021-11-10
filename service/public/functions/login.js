/**
 * TO-DO: Create login functionaliti
 */
const bcrypt = require("bcrypt");
const { createToken } = require('../../../utils/tokenModule');

const login = dataBase => async (request, response) => {
  const { email, password } = request.body;
  dataBase.collection = 'usersCredentials';
  dataBase.filter = {email : email};
  const responseData = {
    status: 0,
    payload: {},
    error: {},
  };

  const loginSucces = token => {
    return {
      token,
      message: 'welcome'
    }
  };

  const loginError = () => { 
    return {
    message: 'wrong credentials'
    };
  };
  
  try {
    responseData.status = 200;
    const credential = await dataBase.getDocument();
    const passwordIsValid = bcrypt.compareSync(password, credential.password);
    responseData.payload = passwordIsValid ? loginSucces(createToken({userId: credential._id})) : loginError();
  } catch (error) {
    responseData.status = 500;
    responseData.error = error;
  }

  console.log(responseData.payload)
  response.status(responseData.status);
  response.send({
    payload: responseData.payload,
    error: responseData.error
  });

};

module.exports = login;

/**
 * TO-DO: Add token management functionality (Json Web Token)
 */

/**
 * TO-DO: Add security good practices, https, tls, etc
 */

/**
 * TO-DO: Add different auth methods
 */