const authVerification = (request, response, next) => {
  const userToken = request.get('token');
  if (userToken && userToken === storedToken){
    next();
  } else {
    response.status = 401;
    response.send('User no logged');
  };
};

/**
 * Search npm package srp
 * 
 * Review the following npm packages
 * https://www.npmjs.com/package/srp
 * 
 * https://www.npmjs.com/package/fast-srp-hap
 * 
 * https://www.npmjs.com/package/@kapetan/secure-remote-password
 * 
 * 
 * Review this article
 * https://medium.com/swlh/what-is-secure-remote-password-srp-protocol-and-how-to-use-it-70e415b94a76
 */