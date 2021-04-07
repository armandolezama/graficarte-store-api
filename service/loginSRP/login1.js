const srp = require('@kapetan/secure-remote-password/server');
const params = require('@kapetan/secure-remote-password/parameters')();

const login1 = cache => (request, response) => {
  const userName = request.body.username;
  const clientPublicEphemeral = request.body.ephemeral;
  const salt = {}; //Retrieved from DB
  const verifier = {}; //Retrieved from DB
  const serverEphemeral = srp.generateEphemeral(verifier, params);
  cache.set(`${userName} session`, {
    salt, 
    verifier, 
    username, 
    serverSecretEphemeral : serverEphemeral.secret,
    clientPublicEphemeral
  });

  response.status(200);
  response.send({
    salt, 
    public: serverEphemeral.public
  });
};

module.exports = login1;