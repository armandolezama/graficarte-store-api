/**
 * TO-DO: Add exclude function for repeated emails
 */
const bcrypt = require('bcrypt');
const { createToken } = require('../../../utils/tokenModule');
const config = require('../../../utils/config');

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


  try {
    const credentialsResponse = await dataBase.saveData('usersCredentials', {...signInCredentials.getCredentials()});
    const registryResponse = await dataBase.saveData('usersRegistry', {...userRecord.getRegistry()});

    response.status(200);
    response.send({
      token: createToken({ userId: credentialsResponse.operation.ops.insertedId}),
      message: 'User data setted',
      credentialsResponse,
      registryResponse
    }); 
  } catch (error) {
    console.log(error);
    response.status(500);
    response.send({
      message: 'Credentials not setted'
    });
  }
};

module.exports = signIn;