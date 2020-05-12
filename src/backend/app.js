const express = require('express');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const inputRouter = require('./inputRoutes/inputRoutes');
const userRouter = require('./userRoutes/userRoutes');

require('./users/passport')(passport)
const app = express();

app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());
  

app.use('/api/inputdata', inputRouter);
app.use('/api/users', userRouter);
module.exports = app;
