const path = require('path')
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({path: path.join(__dirname, '../../config.env')});

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DB_PASSWORD);
mongoose.connect(DB, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    }).then(() => console.log('DB connection successfully'));

const port = 3001;
app.listen(port, () => console.log(`Server started on port: ${port}`))