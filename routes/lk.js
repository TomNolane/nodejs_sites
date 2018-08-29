var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) 
{  
    res.render('lk', 
    { 
        title: 'Вам автоматически одобрен займ',
        description: 'Zaimhome - лучший онлайн сервис по выдаче мгновенных займов и кредитов без проверки вашей кредитной истории. Только у нас лучшие кредитные предложения!',
        aff_sub1: req.get('host'),
        aff_sub2: req.query.keyword,
        aff_sub3: req.query.campaign_id,
        aff_sub4: req.query.utm_source,
    });
});

module.exports = router;
