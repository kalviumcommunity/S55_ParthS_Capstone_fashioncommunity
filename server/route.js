const express = require('express');
const app = express.Router();
const { getConnectionStatus } = require('./db.js'); 

app.get('/data', async (req, res) => {
    try {
        
        const connectionStatus = await getConnectionStatus();
        
        res.send(`${connectionStatus}`);
    } catch (error) {
        console.error("Error retrieving database connection status:", error);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = app;
