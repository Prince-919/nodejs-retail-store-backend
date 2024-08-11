const dotenv = require("dotenv");
dotenv.config();

const _config = {
  port: process.env.PORT,
  databaseUrl: process.env.MONGO_CONNECTION_STRING,
  frontendDomain: process.env.FRONTEND_DOMAIN,
};

module.exports = Object.freeze(_config);
