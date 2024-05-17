const express = require("express");
const app = express.Router();
const { getDataFromDatabase } = require("./db.js");
const { userModel } = require("./AccessSchema.js");
const { router } = require("./server.js");
const jwt = require('jsonwebtoken');
const key = process.env.ACCESS_TOKEN

app.use(express.json())


app.get("/data", async (req, res) => {
  try {
    const data = await getDataFromDatabase();
    res.json(data);
  } catch (error) {
    console.error("Error retrieving data from the database:", error);
    res.status(500).json({ error: "Failed to fetch data check errors" });
  }
});

app.post('/signup', async (req, res) => {
  console.log(req.body)
  try {
    const user = {
      username: req.body.username,
      password: req.body.password
    };
    const response = new userModel(user)
    await response.save()
    res.status(200).send(response);
  } catch (err) {
    console.error("Error in signing up user", err);
    res.status(500).send("Failed to signup user check DB");

  }
});

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const response = await userModel.findOne({ username, password });
    if (!response) {
      res.status(401).send("Invalid username or password");
    } else {
      res.status(200).send(response);
    }
  } catch (err) {
    console.error("Login failed", err);
    res.status(500).send("Failed to login");
  }
});


app.post('/auth', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = { username };
    const token = jwt.sign(user, key);
    res.cookie('token', token, { maxAge: 365 * 24 * 60 * 60 * 1000 });
    res.status(200).json({ token }); 
  } catch (err) {
    console.error("Authentication error:", err);
    res.status(500).json({ error: 'Authentication Error' });
  }
});

if (!key) {
  console.error("JWT key is missing. Please set the ACCESS_TOKEN environment variable.");
  process.exit(1); 
}

module.exports = app;
