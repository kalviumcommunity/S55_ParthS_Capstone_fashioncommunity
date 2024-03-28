const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

let connectionStatus = new Promise((resolve, reject) => {
    resolve('connecting to db...');
});

const startDb = async () => {
    try {
        await mongoose.connect(process.env.Mongo_URI);
        console.log('db connected');
        connectionStatus = 'Connection established';
    } catch (err) {
        console.log('connection failed', err);
        connectionStatus = 'Failed to establish connection with db';
    }
};

const getConnectionStatus = async () => {
    return JSON.stringify(await connectionStatus);
};

module.exports = { startDb, getConnectionStatus };
