/**
 * TO-DO: Create login functionaliti
 */

const login = dataBase => async (request, response) => {
  const { user, password } = request.body;
  dataBase.collection = 'usersCredentials';
  dataBase.filter = {user : user};
  const responseData = {
    status: 0,
    payload: {},
    error: {},
  };

  const loginSucces = {
    message: 'welcome'
  };

  const loginError = {
    message: 'wrong credentials'
  };
  
  try {
    responseData.status = 200;
    const credential = await dataBase.getDocument();
    responseData.payload = credential.password === password ? loginSucces : loginError;
  } catch (error) {
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