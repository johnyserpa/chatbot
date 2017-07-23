var express = require('express');
var router = express.Router();
var Cleverbot = require('cleverbot-node');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/message', function(req, res, next) {

  res.send('oi');

});

router.post('/message', function(req, res, next) {

  console.log(req.body.message);

  cleverbot = new Cleverbot;
  cleverbot.configure({botapi: "CC3eo2wzmJZFYqQ5B0jUvLamNJw"});
  cleverbot.write(req.body.message, function (response) {
    console.log(response.output);
    res.json({
      message: {
        body: response.output
      }
    })
  });

});

module.exports = router;
