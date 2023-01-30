var express = require('express');
var app = express();
app.get('/',function(req,res){
    res.send('hi');
})
var server = app.listen(8081,function(){
    var host = server.adderss().adderss;
    var port = server.adderss().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})