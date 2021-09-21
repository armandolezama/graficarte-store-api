const login = dataBase => (request, response) => {
  const { userName, userPassword } = request.body;

  
  response.redirect('/login');


};

module.exports = login;