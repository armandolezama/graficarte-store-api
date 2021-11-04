require('dotenv').config();

const config = {
  PORT = process.env.PORT,
  MONGO_DB = process.env.MONGO_DB,
  DATABASE_NAME = process.env.DATABASE_NAME,
  ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET,
  ACCESS_TOKEN_EXPIRATION = process.env.ACCESS_TOKEN_EXPIRATION,
  REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET
};

module.exports = config;