var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) 
{
  res.render('form', 
  { 
      title: 'Подача Заявки на Получение Займа Онлайн | Сервис Zaimhome',
      description: 'Zaimhome - лучший онлайн сервис по выдаче мгновенных займов и кредитов без проверки вашей кредитной истории. Только у нас лучшие кредитные предложения!'  
  });
});

router.post('/', function(req, res, next) 
{
  res.render('form', 
  { 
      title: 'Подача Заявки на Получение Займа Онлайн | Сервис Zaimhome',
      description: 'Zaimhome - лучший онлайн сервис по выдаче мгновенных займов и кредитов без проверки вашей кредитной истории. Только у нас лучшие кредитные предложения!'  
  });
});

module.exports = router;
