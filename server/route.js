const express = require("express");
const app = express.Router();
const {getDataFromDatabase } = require("./db.js");
const {userModel} = require("./AccessSchema.js")

app.get("/data", async (req, res) => {
  try {
    const data = await getDataFromDatabase();

    res.json(data);
  } catch (error) {
    console.error("Error retrieving data from the database:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});


app.post('/signup',async (req,res)=>{
  try{
          const user = {
              username: req.body.username,
              password: req.body.password
          }

          const response = await userModel.create(user)
          res.status(200).send(response);
  }
  catch(err){
      console.log("Error in signing up user",err);
  }
})

app.post('/login',async (req,res)=>{
  try{
          const {username,password} = req.body
          const response = await userModel.findOne({username,password})
          if(!response){
              res.status(500).send("invalid user credentials")
          }
          
          res.status(200).send(response)
  }
  catch(err){
      console.log("Login failed",err);
  }
})

module.exports = app;
