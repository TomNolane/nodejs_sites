var express = require('express');
var router = express.Router();
var pug = require('pug');
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) 
{
  var _amount = 20000, period=21, percent = 95, referer = req.headers.referer;
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress; 
  if(req.query.amount)
  { 
    if(req.query.amount >= 1000 && req.query.amount <= 100000)
      _amount = req.query.amount;
  }

  if(_amount <= 10000)
    period = 7;
  else if(_amount <= 15000)
    period = 14;
  else if(_amount <= 20000)
    period = 21;
  else if(_amount <= 50000)
    period = 30;
  else period = 30; 
    
  if(_amount <= 10000)
    percent = 95;
  else if(_amount <= 15000)
    percent = 95;
  else if(_amount <= 20000)
    percent = 95;
  else if(_amount <= 30000)
    percent = 85;
  else if(_amount <= 50000)
    percent = 77; 
  else 
    percent = 65;
  
  locals = {
    title: 'Срочные займы круглосуточно без проверок Онлайн',
    description: 'Zaimhome - лучший онлайн сервис по выдаче мгновенных займов и кредитов без проверки вашей кредитной истории. Только у нас лучшие кредитные предложения!',
    amount: _amount,
    period: period,
    referer: referer,
    percent: percent,
    ip: ip
  };

  options = {
   basedir: path.join(__dirname, 'views'),
   debug: false,
   compileDebug: false,
   cache: true,
   doctype: 'html'
 };
  
  var fn = pug.compileFile('views/index.pug', options);
  var html = fn(locals); 
  res.send(html);
  // res.render('index', 
  // { 
  //   title: 'Срочные займы круглосуточно без проверок Онлайн', 
  //   description: 'Zaimhome - лучший онлайн сервис по выдаче мгновенных займов и кредитов без проверки вашей кредитной истории. Только у нас лучшие кредитные предложения!',
  //   amount: _amount,
  //   period:period,
  //   referer:referer,
  //   percent:percent,
  //   ip:ip
  //  });
});

module.exports = router;