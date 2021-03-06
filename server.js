var express = require('express');
var app = express();
var server = require('http').Server(app);

app.use('/public', express.static(__dirname + "/public"));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});

server.listen(process.env.PORT || 8081,function(){
    console.log('Listening on '+server.address().port);
});
