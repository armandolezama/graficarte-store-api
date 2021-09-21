const signIn = dataBase => async (request, response) => {
  const signInCredentials = new dataBase.models.UserCredentials(
    {
      user: request.body.user, 
      password: request.body.password
    }
  );
  const userRegistry = new dataBase.models.UserRegistry;

  try {
    await dataBase.saveData('usersCredentials', {...signInCredentials.getCredentials()});
  
    //await dataBase.saveData('usersRegistry', {...userRegistry.getRegistry()});
  
    //await dataBase.saveData('userData', {})
    response.status(200);
    response.send({
      message: 'User data setted'
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