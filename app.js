var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser'); 
var cors = require('cors');

var indexRouter = require('./routes/index'); 
var aboutRouter = require('./routes/about');
var agreementRouter = require('./routes/agreement');
var contractRouter = require('./routes/contract');
var documentsRouter = require('./routes/documents');
var faqRouter = require('./routes/faq');
var ofertaRouter = require('./routes/oferta');
var formRouter = require('./routes/form');
var moneyRouter = require('./routes/money');
var rulesRouter = require('./routes/rules');
var lkRouter = require('./routes/lk');
var validateRouter = require('./validate');

module.exports = async (value) => 
new Promise((resolve, reject) => {
    request(value, (error, response, data) => {
        if(error) reject(error)
        else resolve(data)
    })
}) 

var app = express();
app.use(compression());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
  extended: true
}));
 
app.use(cors({
  origin: true,
  credentials: true
}));
app.use('/', indexRouter); 
app.use('/about', aboutRouter);
app.use('/agreement', agreementRouter);
app.use('/contract', contractRouter);
app.use('/documents', documentsRouter);
app.use('/faq', faqRouter);
app.use('/oferta', ofertaRouter);
app.use('/form', formRouter);
app.use('/money', moneyRouter);
app.use('/rules', rulesRouter);
app.use('/lk', lkRouter);
app.use('/validate', validateRouter);

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

process.env.NODE_ENV = 'production';
module.exports = app;
