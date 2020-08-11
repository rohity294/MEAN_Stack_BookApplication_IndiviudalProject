var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./APP_API/models/db');
//const indexRouter = require('./app_server/routes/index'); 
const bookRouter = require('./APP_API/routes/books'); 
const usersRouter = require('./app_server/routes/users'); 

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'pug');

//implementing CORS

app.use(function(req,res,next){
  req.header('Access-Control-Allow-Origin','*')
  req.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept,Authorization');
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,PATCH,DELETE');
  res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept,Authorization');
  next();
})

//////////////////////////

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static(path.join(__dirname, 'app_public')));
//app.use(express.static(path.join(__dirname, "APP_PUBLIC/food-public/build")));
//app.use('/', indexRouter);
app.use('/api', bookRouter);
app.use('/users', usersRouter);
app.use(express.static(path.join(__dirname,'app_public','build')))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
