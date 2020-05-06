const express = require('express');
const app = express();
const userInputHandler = require('./userInput/userInputHandler')

app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', (req, res) => res.send('Welcome to the server side'));
app.get('/api/inputdata', userInputHandler.getAllItems);
app.post('/api/inputdata', userInputHandler.createNewItem);
app.get('/api/inputdata/:id', userInputHandler.getItem);
app.patch('/api/inputdata/:id', userInputHandler.updateItem);
app.delete('/api/inputdata/:id', userInputHandler.deleteItem);

module.exports = app;
