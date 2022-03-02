/**
 * TO-DO: Add exclude function for repeated emails
 */
const bcrypt = require('bcrypt');
const { createToken } = require('../../../utils/tokenModule');
const config = require('../../../utils/config');

const userAlredyExistError = () => {
  return {
    status: 400,
    message: 'The email you entered already exists. Write another email or try to loggin.',
    data: {},
    error: {
      info: 'User alredy exist',
    },
    };
};

const fieldValidationError = error => {
  return {
    status: 400,
    message: error.message,
    data: {},
    error: {
      info: error.info,
    },
    };
};

const signinSuccess = config => {
  return {
    status: 200,
    data: {
      token: config.token,
      registry: {
        ...config.registry
      }
    },
    message: 'User data setted',
  }
}

const signIn = dataBase => async (request, response) => {
  const { name, lastName, phoneNumber, email, address, password } = request.body;

  const signInCredentials = new dataBase.models.UserCredentials(
    {
      email,
      password: bcrypt.hashSync(password, config.SALT_ROUNDS)
    }
  );
  const userRecord = new dataBase.models.UserRegistry({
    name,
    lastName,
    phoneNumber,
    email,
    address
  });

  const responseData = {
    payload: {},
    error: {},
  };
  


  try {
    dataBase.collection = 'usersCredentials';
    dataBase.filter = {email : email};

    const credential = await dataBase.getDocument();
    const userAlredyExist = credential.operation !== null;

    if(userAlredyExist) {
      responseData.payload = userAlredyExistError();
    } else {
      const credentialsResponse = await dataBase.saveData('usersCredentials', {...signInCredentials.getCredentials()});
      await dataBase.saveData('usersRegistry', {...userRecord.getRegistry()});
  
      responseData.payload = signinSuccess({
        token: createToken({ userId: credentialsResponse.operation.ops.insertedId}),
        registry: userRecord.getRegistry(),
      }); 
    }

  } catch (error) {
    responseData.status = 500;
    responseData.error = error;
    responseData.message = 'Error from server'
  }

  response.status(responseData.payload.status);
  response.send({
    payload: responseData.payload,
    error: responseData.error
  });

};

module.exports = signIn;