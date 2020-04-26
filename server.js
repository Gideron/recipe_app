'use strict';

require('dotenv').config();

const express = require('express');
const db = require('./database/db');
const app = express();
const port = 3000;

const userRoute = require('./routes/userRoute');
const recipeRoute = require('./routes/recipeRoute');
const categoryRoute = require('./routes/categoryRoute');
const commentRoute = require('./routes/commentRoute');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/user', userRoute);
app.use('/recipe', recipeRoute);
app.use('/category', categoryRoute);
app.use('/comment', commentRoute);

db.on('connected', () => {
    app.listen(port);
})
//app.listen(port, () => console.log(`Example app listening on port ${port}!`));

