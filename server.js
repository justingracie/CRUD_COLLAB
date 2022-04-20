const menu = require('./models/menu');

const express = require('express');
const app = express();

const PORT = 4000;

let food;


app.listen(PORT, ()=>
    console.log(`listening on ${PORT}`)
);