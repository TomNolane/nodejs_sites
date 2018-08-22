var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) 
{
  res.render('index', 
  { 
    title: 'Срочные займы круглосуточно без проверок Онлайн', 
    description: 'Zaimhome - лучший онлайн сервис по выдаче мгновенных займов и кредитов без проверки вашей кредитной истории. Только у нас лучшие кредитные предложения!' });
});

module.exports = router;