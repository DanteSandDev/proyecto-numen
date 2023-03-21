const express = require('express');
const path = require('path')
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const connect = require("./db/db")
const carsRouter = require('./routes/cars');
const postsRouter = require('./routes/posts');

const app = express();

app.use(logger('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/cars', carsRouter);
app.use("/posts", postsRouter)
connect();


module.exports = app;
