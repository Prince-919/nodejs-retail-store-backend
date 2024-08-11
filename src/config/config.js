const dotenv = require("dotenv");
dotenv.config();

const _config = {
  port: process.env.PORT,
  databaseUrl: process.env.MONGO_CONNECTION_STRING,
  nodeEnv: process.env.NODE_ENV,
};

module.exports = Object.freeze(_config);
