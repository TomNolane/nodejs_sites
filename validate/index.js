var express = require('express');
var router = express.Router(); 
var http = require('http');
var app = express();
var fs = require('fs');

var request = require('request');


router.get('/*', function(req, res, next) 
{ 
    res.send('Привет любознательный!');
});

/* GET home page. */
router.post('/phone', function(req, res, next) 
{ 
    if(req.body.phone)
    {  
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
        var phone = 0;
        phone = req.body.phone.replace(/[^.\d]+/g,"");
        console.log(req.body.phone.replace(/[^.\d]+/g,""));

        var options = {
            host: 'www.megafon.ru',
            path: '/api/mfn/info?msisdn='+phone
          };

          var req = http.get(options, function(result) {
            //console.log('STATUS: ' + res.statusCode);
            //console.log('HEADERS: ' + JSON.stringify(res.headers));
          
            // Buffer the body entirely for processing as a whole.
            var bodyChunks = [];
            result.on('data', function(chunk) {
              bodyChunks.push(chunk);
            }).on('end', function() {
              
                var body = JSON.parse(Buffer.concat(bodyChunks));
                var operator = 'undefined';
                var status = 0;
                var region_id = 0;

                if(body.operator_id)
                {
                    status = 1;
                    switch(body.operator_id)
                    {
                        case 1: operator ='mts'; break;
                        case 2: operator ='megafon'; break;
                        case 20: operator ='tele2'; break;
                        case 99: operator ='beeline'; break;
                    }
                }

                if(body.region_id)
                {
                    region_id = body.region_id;
                }

                res.send(JSON.stringify({'status':status,'operator':operator,'region_id':region_id}));
                // console.log('Operator: ' + body.operator);
                // console.log('operator_id: ' + body.operator_id);
                // console.log('region: ' + body.region);
                // console.log('region_id: ' + body.region_id);
            })
          });
          
          req.on('error', function(e) {
            console.log('ERROR: ' + e.message);
            res.send(JSON.stringify({'status':'0','operator':'undefined'}));
          });
    }
    else
    {
        res.send('error');
    } 
});

/* GET home page. */
router.post('/passport_code', function(req, res, next) 
{  
    if(req.body.passport_code)
    { 
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
        var passport_code = 0;
        passport_code = req.body.passport_code.replace(/[^.\d]+/g,"");
        console.log(req.body.passport_code.replace(/[^.\d]+/g,""));
        var obj;
        fs.readFile('./validate/passport.json', 'utf8', function (err, data) {
          if (err) throw err;
          obj = JSON.parse(data);

          function getCountryByCode(code) {
            return obj.filter(
                function(data){ return data.code == code }
            );
          }

          var found = getCountryByCode(passport_code);
          
          if(found)
            res.send(JSON.stringify({'status':'1','who':found[0].title.replace(/[\']+/g,"")}));
          else
            res.send(JSON.stringify({'status':'0','who':'Пожалуйста, введите код подразделения правильно'})); 
        }); 
    }
    else
    {
        res.send('error');
    } 
});

module.exports = router;