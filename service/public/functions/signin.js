/**
 * TO-DO: Add exclude function for repeated emails
 */

const signIn = dataBase => async (request, response) => {
  const signInCredentials = new dataBase.models.UserCredentials(
    {
      user: request.body.name, 
      password: request.body.password,
      email: request.body.email
    }
  );
  const userRecord = new dataBase.models.UserRegistry({
    name: request.body.name,
    lastName: request.body.lastName,
    email: request.body.email,
    address: request.body.address
  });


  try {
    const credentialsResponse = await dataBase.saveData('usersCredentials', {...signInCredentials.getCredentials()});
    const registryResponse = await dataBase.saveData('usersRegistry', {...userRecord.getRegistry()});

    response.status(200);
    response.send({
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