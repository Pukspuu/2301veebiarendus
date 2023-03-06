var express = require('express');
var app = express();

let uusID= 0;
let todoItems = [];

app.put('./', function(req,res){
   console.log('olen put');
   res.send(JSON.stringify(todoItems));
});


app.get('/', function (req, res) {
   res.set({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
}); 
   res.send(JSON.stringify(todoItems));
});

var server = app.listen(8081, function () {
   var port = server.address().port
   console.log("Example app listening at http://localhost:%s", port)
}); 
