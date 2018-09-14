var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next)
{
  res.sendFile(__dirname + '/views/rules.html');
  // res.render('rules', { 
  //   title: 'Правила предоставления займов',
  //   description: 'Zaimhome - лучший онлайн сервис по выдаче мгновенных займов и кредитов без проверки вашей кредитной истории. Только у нас лучшие кредитные предложения!'  
  // });
});

module.exports = router;
