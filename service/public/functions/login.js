const login = (request, response) => {
  const ephimeralClient = request.body.ephimeralClient;
  const clientSessionProof = request.body.proof;

  if(ephimeralClient) {
    //do some validation
    response.redirect('/login1');
  } else if(clientSessionProof) {
    response.status = 401;
    response.redirect('/login2');
  };
};

module.exports = login;