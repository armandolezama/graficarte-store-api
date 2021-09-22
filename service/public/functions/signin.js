const signIn = dataBase => async (request, response) => {
  
  const signInCredentials = new dataBase.models.UserCredentials(
    {
      user: request.body.name, 
      password: request.body.password
    }
  );
  const userRecord = new dataBase.models.UserRegistry({
    name: request.body.name,
    lastName: request.body.lastName,
    email: request.body.email,
    address: request.body.address
  });


  try {
    await dataBase.saveData('usersCredentials', {...signInCredentials.getCredentials()});
  
    await dataBase.saveData('usersRegistry', {...userRecord.getRegistry()});
  
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