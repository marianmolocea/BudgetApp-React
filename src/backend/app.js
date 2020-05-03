const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => res.send('Hello Marian!!!!'));
app.get('/hello', (req, res) => res.send('Message from hello route'));


app.listen(port, () => console.log(`Server started on port: ${port}`))
