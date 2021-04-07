const srp = require('@kapetan/secure-remote-password/server');
const params = require('@kapetan/secure-remote-password/parameters')();

const login2 = cache => (request, response) => {
  const clientSessionProof = request.body.proof;
  const {
    salt, 
    verifier,
    username,
    serverSecretEphemeral,
    clientPublicEphemeral
  } = cache.get(`${request.username} session`);
  const serverSession = srp.deriveSession(
    serverSecretEphemeral, 
    clientPublicEphemeral, 
    salt, 
    username, 
    verifier, 
    clientSessionProof, 
    params
  );
  response.status(200);
  response.send(
    {
      proof: serverSession.proof
    }
  );
};

module.exports = login2;