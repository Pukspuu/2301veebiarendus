var express = require('express');
var app = express();


app.get('/', function (req, res) {
   res.set({
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*"
}); 
   res.writeHead(200);
   res.send('tere');
})

var server = app.listen(8081, function () {
   var port = server.address().port
   console.log("Example app listening at http://localhost:%s", port)
})
