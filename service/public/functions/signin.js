const signIn = (request, response) => {
  const userName = request.body.user;
  const password = request.body.password;

  //Get user data from DB

  if(userName && password && userName !== '' && password !== '' ) {
    response.status = 200;
    response.send('user signed');
  } else {
    response.status = 400;
    response.send('Error: User or password empty')
  };
};

module.exports = signIn;