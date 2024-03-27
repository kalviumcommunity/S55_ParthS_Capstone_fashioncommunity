const express = require('express')
const app = express()
require('dotenv').config()

app.get('/',(req,res)=>{
    res.send('Server Deployed Successfully')
})

app.listen(process.env.PORT ,()=>{
    console.log('success')
})

module.exports = app