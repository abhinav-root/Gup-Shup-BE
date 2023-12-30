const mongoose = require("mongoose");
const logger = require("./logger");

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  logger.info("Connected to MongoDB");
};

module.exports = connectDB;
