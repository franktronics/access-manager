const express = require('express');
const path = require('path')
const apiRoutes = require('./routes/base')
require('dotenv').config({path: '.env'})

const app = express();
app.use(express.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/files', express.static(path.join(__dirname, 'files')))

app.use('/api', apiRoutes)
app.get('/', (req, res) => { res.json({msg: 'Hello server!'})})


module.exports = app;