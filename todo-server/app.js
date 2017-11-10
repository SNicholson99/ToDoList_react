var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var index = require('./routes/index');
var todos = require('./routes/todos');

var app = express();

mongoose.connect('mongodb://localhost/todolist', {useMongoClient: true})
.then(() =>  console.log('connection successful'))
.catch((err) => console.error(err));

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', index);
app.use('/api/todos', todos);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

 // render the error page
  res.status(err.status || 500);
  res.json({error: err});
});


// app.post('/', function(req, res) {
//   // Insert JSON straight into MongoDB
//   db.collection('todolist').insert(req.body, function (err, result) {
//       if (err)
//          res.send('Error');
//       else
//         res.send('Success');
//
//   });
// });


module.exports = app;
