const config = require('./config');
const jwt = require('jsonwebtoken');

/**
 * Expiration unit measure: https://github.com/vercel/ms
 */

const createToken = payload => jwt.sign(payload, config.ACCESS_TOKEN_SECRET, { expiresIn: config.ACCESS_TOKEN_EXPIRATION });

const createRefreshToken = payload => jwt.sign(payload, config.REFRESH_TOKEN_SECRET)

const verifyToken = refreshToken => {
  const tokenStatus = {
    isValidToken: false,
    payload: ''
  };
  jwt.verify(refreshToken, config.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) {
      tokenStatus.payload = 'Error: Invalid refresh token'
    } else {
      tokenStatus.isValidToken = true;
      tokenStatus.payload = createToken(user);
    };
    return tokenStatus;
  });
};

module.exports = {
  createToken,
  createRefreshToken,
  verifyToken
};