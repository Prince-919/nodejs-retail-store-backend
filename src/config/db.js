const mongoose = require("mongoose");
const config = require("./config");

async function dbConnect() {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Connected to database successfully");
    });

    mongoose.connection.on("error", (err) => {
      console.log("Error in connecting to database.", err);
    });

    await mongoose.connect(config.databaseUrl);
  } catch (err) {
    console.error("Failed to connect to database.", err);
    process.exit(1);
  }
}

module.exports = dbConnect;
