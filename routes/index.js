var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.reg=function(req,res){
  console.log('get reg');
  res.send('hello world!');
  res.end();
};

router.doReg=function(req,res){
  console.log('post doReg');
};

router.login=function(req,res){


};

router.doLogin=function(req,res){
  var user={userName:'18210596067','password':'123456789wang'};
  console.log('get login');

  //res.redirect('index.html');
  res.writeHead(500, {
    "Content-Type": "text/plain;charset=utf-8"
  });
  res.end("数据提交完毕");
}
module.exports = router;
