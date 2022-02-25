/**
 * TO-DO: Create login functionaliti
 */
const bcrypt = require("bcrypt");
const { createToken } = require('../../../utils/tokenModule');

const loginSucces = config => {
  return {
    status: 200,
    data: {
      token: config.token,
      registry: config.registry
    },
    message: 'welcome'
  }
};

const wrongCredentialsError = () => {
  return {
    status: 400,
    message: 'email is not registered or is misspelled',
    data: {},
    error: {
      info: 'user not found',
    },
    };
};

const wrongPasswordError = () => {
  return {
    status: 400,
    message: 'wrong password',
    data: {},
    };
};

const login = dataBase => async (request, response) => {
  const { email, password } = request.body;

  dataBase.collection = 'usersCredentials';
  dataBase.filter = {email : email};
  
  const responseData = {
    status: 0,
    payload: {},
    error: {},
  };
  
  try {
    responseData.status = 200;
    const credential = await dataBase.getDocument();
    const userIsValid = credential.operation !== null;
    if(userIsValid) {
      const passwordIsValid = bcrypt.compareSync(password, credential.operation?.password);
      if(passwordIsValid) {
        dataBase.collection = 'usersRegistry';
        dataBase.filter = {email : email};
        const userRegistry =  await dataBase.getDocument();
        const userRegistryIsValid = userRegistry.operation !== null;
        if(userRegistryIsValid) {
          const token = createToken({userId: credential._id});
          const registry = userRegistry.operation;
          const config = { token, registry }
          responseData.payload = loginSucces(config);
        } else {
          responseData.payload = wrongCredentialsError();
        }
      } else {
        responseData.payload = wrongPasswordError();
      }
    } else {
      responseData.payload = wrongCredentialsError();
    }
  } catch (error) {
    console.log(error)
    responseData.status = 500;
    responseData.error = error;
  }
  
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