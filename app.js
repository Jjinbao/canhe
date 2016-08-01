var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var getUsers=require('./dbfile.js');
var mysql=require('mysql');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/app')));

//app.use('/', routes);
//app.use('/users', users);

// catch 404 and forward to error handler
/*app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});*/

app.get('/',function(req,res){
  res.send('hello nodejs');
  //res.end();
  res.sendfile('app/index.html');
});

app.get('/test',function(req,res){
  var connection=mysql.createConnection(
    {
      host:'localhost',
      user:'root',
      password:'fanher570916',
      database:'fanhe'
    }
  );
  connection.connect();
  connection.query('select * from t1 where name = "jack"',function(err,rows,filed){
    if(err){
      throw err;
    }else{
      res.writeHead(200,{"Content-Type":"text/html"});
      res.end(rows);
      console.log(rows);
    }
  });
  connection.end();

  //}
})

//app.get('/reg',routes.login);

//app.post('/reg',function(reg,res){});
app.get('/reg',routes.reg);
app.post('/reg',routes.doReg);
app.get('/login',routes.login);
app.post('/login',routes.doLogin);

app.listen(3000);
module.exports = app;
