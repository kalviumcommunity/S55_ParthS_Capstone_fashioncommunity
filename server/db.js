const mongoose = require("mongoose");
require("dotenv").config();
const DataModel = require("./schema.js");

let isConnected = false;

const startDb = async () => {
  try {
    let mongoURI = process.env.Mongo_URI || "";
    console.log("Mongo URI:", mongoURI);
    if (!mongoURI) {
      throw new Error("Mongo_URI environment variable is not defined.");
    }

    await mongoose.connect(mongoURI);
    console.log("db connected");
    isConnected = true;
  } catch (err) {
    console.log("connection failed", err);
    isConnected = false;
    throw err;
  }
};

const getDataFromDatabase = async () => {
  try {
    const data = await DataModel.find();
    return data;
  } catch (error) {
    throw error;
  }
};

const getConnectionStatus = async () => {
  return isConnected
    ? "Connection established"
    : "Failed to establish connection with db";
};

module.exports = { startDb, getConnectionStatus, getDataFromDatabase };
