var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var compression = require('compression');

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

module.exports = async (value) => 
    new Promise((resolve, reject) => {
        request(value, (error, response, data) => {
            if(error) reject(error)
            else resolve(data)
        })
    })

/*
const ngrok = require('ngrok');
(async function() {
  const url = await ngrok.connect(3000);
  console.log(url);
})();
*/

var app = express();
app.use(compression());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

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
