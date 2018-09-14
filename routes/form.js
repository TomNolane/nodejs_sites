var express = require('express');
var router = express.Router();
var pug = require('pug');
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) 
{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
  var amount = 20000, period=21, percent = 95, referer = req.headers.referer;
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  if(req.query.amount)
  { 
    if(req.query.amount >= 1000 && req.query.amount <= 100000)
      amount = req.query.amount;
  } 

  if(req.query.period)
  {
    if(amount <= 10000)
      period = 7;
    else if(amount <= 15000)
      period = 14;
    else if(amount <= 20000)
      period = 21;
    else if(amount <= 50000)
      period = 30;
    else period = 30;
  }
    
  if(amount <= 10000)
    percent = 95;
  else if(amount <= 15000)
    percent = 95;
  else if(amount <= 20000)
    percent = 95;
  else if(amount <= 30000)
    percent = 85;
  else if(amount <= 50000)
    percent = 77; 
  else 
    percent = 65;

  locals = {
    title: 'Подача Заявки на Получение Займа Онлайн | Сервис Zaimhome',
    description: 'Zaimhome - лучший онлайн сервис по выдаче мгновенных займов и кредитов без проверки вашей кредитной истории. Только у нас лучшие кредитные предложения!',
    amount: amount,
    period: period,
    referer: referer,
    percent: percent,
    ip: ip,
  };

  options = {
    basedir: path.join(__dirname, 'views'),
    debug: false,
    compileDebug: false,
    cache: true,
    doctype: 'html'
  };

  var fn = pug.compileFile('views/form.pug', options);
  var html = fn(locals);
  res.send(html);
  
  // res.render('form', {
    // title: 'Подача Заявки на Получение Займа Онлайн | Сервис Zaimhome',
    // description: 'Zaimhome - лучший онлайн сервис по выдаче мгновенных займов и кредитов без проверки вашей кредитной истории. Только у нас лучшие кредитные предложения!',
    // amount: amount,
    // period: period,
    // referer: referer,
    // percent: percent,
    // ip: ip,
  //   //city:city
  // }); 
});

router.post('/', function(req, res, next) 
{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
  var amount = 20000, period=21, percent = 95, referer = req.headers.referer;
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  if(req.body.amount)
  { 
    if(req.body.amount >= 1000 && req.body.amount <= 100000)
      amount = req.body.amount;
  } 

  if(req.body.period)
  {
    if(amount <= 10000)
      period = 7;
    else if(amount <= 15000)
      period = 14;
    else if(amount <= 20000)
      period = 21;
    else if(amount <= 50000)
      period = 30;
    else period = 30;
  }
    
  if(amount <= 10000)
    percent = 95;
  else if(amount <= 15000)
    percent = 95;
  else if(amount <= 20000)
    percent = 95;
  else if(amount <= 30000)
    percent = 85;
  else if(amount <= 50000)
    percent = 77; 
  else 
    percent = 65;

  res.render('form', 
  { 
      title: 'Подача Заявки на Получение Займа Онлайн | Сервис Zaimhome',
      description: 'Zaimhome - лучший онлайн сервис по выдаче мгновенных займов и кредитов без проверки вашей кредитной истории. Только у нас лучшие кредитные предложения!',
      amount: amount,
      period:period,
      referer:referer,
      percent:percent,
      ip:ip
  });
}); 

module.exports = router;
