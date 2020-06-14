const { MongoClient } = require("mongodb");

const config = require("../config");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;

db.initialize = async () => {
  // return await Promise.resolve("Fake db initialized");
  
  await db.mongoose.connect(config.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  
};

module.exports = { db };
