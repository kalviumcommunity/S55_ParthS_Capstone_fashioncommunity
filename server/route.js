const express = require("express");
const app = express.Router();
const {getDataFromDatabase } = require("./db.js");

app.get("/data", async (req, res) => {
  try {
    const data = await getDataFromDatabase();

    res.json(data);
  } catch (error) {
    console.error("Error retrieving data from the database:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = app;
