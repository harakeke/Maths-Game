var express = require('express')
var app = express()

app.get('/', function (req, res) {
 res.send('Hello world')
})

app.get('/lisa', function (req, res) {
 res.send('Waaa haaa ha')
})

var server = app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
 var addr = server.address();
 console.log("Chat server listening at", addr.address + ":" + addr.port);
});