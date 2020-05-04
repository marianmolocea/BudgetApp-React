const express = require('express');
const app = express();
const port = 3001;

const inputData = require('../data/inputData.json');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', (req, res) => res.send('Hello Marian!!!!'));
app.get('/api/inputdata', (req, res) => {
    req.header('Content-Type: application/json')
    res.send(inputData.items)
});


app.listen(port, () => console.log(`Server started on port: ${port}`))
