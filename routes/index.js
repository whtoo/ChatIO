var express = require('express');
var router = express.Router();

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/chat',function(req,res,next) {
  res.render('chat',{});
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});


http.listen(3030, function(){
  console.log('listening on *:3030');
});

router.post('/postInfo',function(req,res,next){
  res.render('index', {title:'Post me'});
});

module.exports = router;
