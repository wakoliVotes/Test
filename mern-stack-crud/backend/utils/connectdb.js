const mongoose = require('mongoose')

const connectdb = async () => {
  const DB_URI = "mongodb://localhost:27017/reactdb";
  try {
    const connectionParams = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    await mongoose.connect(DB_URI, connectionParams);
    console.info("connection to mongodb remotely was sucesfull");
  } catch (error) {
    console.error(`There was an error during connection: ${error}`);
  }
};

module.exports = connectdb;
