const express = require('express');
const app = express();
const inputRouter = require('./inputRoutes/inputRoutes')

app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
app.get('/', (req, res) => res.send('Welcome to the server side'));
app.use('/api/inputdata', inputRouter);
module.exports = app;
