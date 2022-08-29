var http = require('http');
var file = '/text.txt';
var options = {
    host:'localhost',
    port:'8080',
    path: file
};
var callback = function(response){
    var body = '';
    response.on('data',function(data){
        body += data;
    });
    response.on('end',function(){
        console.log(body);
    });
}

var req = http.request(options,callback);
req.end();