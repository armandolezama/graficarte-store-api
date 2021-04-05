const login = (request, response) => {
  const userName = request.body.user;
  const password = request.body.password;

  //Get user data from DB

  if(userName && password && userName !== '' && password !== '' ) {
    response.status = 200;
    response.send('user logged');
  } else {
    response.status = 401;
    response.send('Error: Invalid user or password')
  };
};

module.exports = login;