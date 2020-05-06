const fs = require('fs');
const express = require('express');
const app = express();
const path = require('path');

const inputData = require(`../data/inputData.json`);

app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.get('/', (req, res) => res.send('Hello Marian!!!!'));
app.get('/api/inputdata', (req, res) => {
    req.header('Content-Type: application/json')
    res.send(inputData.items)
});

app.get('/api/inputdata/:type/:id', (req, res) => {
    const selectedItem = inputData.items[req.params.type].find(item => item.id === req.params.id)
    res.send(selectedItem)
});

app.post('/api/inputdata/:type', (req, res) => {
    const newInput = Object.assign({}, req.body);
    inputData.items[req.params.type].push(newInput);
    fs.writeFile(path.join(__dirname, '../data/inputData.json'), JSON.stringify(inputData), err => {
        res.status(201).json({
            status: "success"
        })
    })
})

module.exports = app;
