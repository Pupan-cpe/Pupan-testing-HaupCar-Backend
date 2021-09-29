var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var carRouter = require('./routes/car');

var cors = require('cors')
const fs = require('fs');



var app = express();
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
carRouter
app.use('/', indexRouter);
app.use('/api/v1', carRouter);

app.use('/test', indexRouter);

app.use('/users', usersRouter);

module.exports = app;
