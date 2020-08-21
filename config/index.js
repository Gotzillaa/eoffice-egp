const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_DATABASE: process.env.DB_DATABASE,
  DB_HOST: process.env.DB_HOST,
  DB_DIALECT: process.env.DB_DIALECT,
  DB_PORT: process.env.DB_PORT,
  DB_USERNAME_PORD: process.env.DB_USERNAME_PORD,
  DB_PASSWORD_PORD: process.env.DB_PASSWORD_PORD,
  DB_DATABASE_PORD: process.env.DB_DATABASE_PORD,
  DB_HOST_PORD: process.env.DB_HOST_PORD,
  DB_DIALECT_PORD: process.env.DB_DIALECT_PORD,
  DB_PORT_PORD: process.env.DB_PORT_PORD,
};
