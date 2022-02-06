const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({ path: './config.env' });

const PORT = process.env.PORT;

require('./db/conn');

app.use(express.json());

// const User = require('./model/userSchema');

app.use(require('./router/auth'));


// Middleware
// it will perform some fuctionality/check wheather it condtion is satisfied
//eg check if user is authenticated/logged in or not

const middleware = (req, res, next) => {
    console.log(`Hello my middleware`);
    next();
}




// app.get('/', (req, res) => {
//     res.send(`Hello world from the server`);
// });

app.get('/about', middleware, (req, res) => {
    console.log(`Hello about me`)
    res.send(`Hello About world from the server`);
});

app.get('/contact', (req, res) => {
    res.send(`Hello contact world from the server`);
});

app.get('/signIn', (req, res) => {
    res.send(`Hello Log in world from the server`);
});

app.get('/signUp', (req, res) => {
    res.send(`Hello sign up world from the server`);
});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})