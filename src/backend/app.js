const express = require('express');
const app = express();
const userInputHandler = require('./userInput/userInputHandler')

app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', (req, res) => res.send('Hello Marian!!!!'));
app.get('/api/inputdata', userInputHandler.getAllItems);

app.get('/api/inputdata/:type/:id', (req, res) => {
    const selectedItem = inputData.items[req.params.type].find(item => item.id === req.params.id)
    res.send(selectedItem)
});

app.post('/api/inputdata/:type', userInputHandler.createNewItem)

module.exports = app;
