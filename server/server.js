const express = require('express');
const app = express();
const { startDb, getConnectionStatus } = require('./db.js'); 

var cors = require('cors')
app.use(cors())

const printStatus = async () => {
    await startDb(); 
    console.log("MongoDB Connection Status -> ", await getConnectionStatus());
}

printStatus();


app.get('/', (req, res) => {
    res.send('Server Deployed Successfully');
});


const route = require('./route.js');
app.use('/', route);

app.listen(process.env.PORT, () => {
    console.log('Server running on port', process.env.PORT);
});

module.exports = app;
