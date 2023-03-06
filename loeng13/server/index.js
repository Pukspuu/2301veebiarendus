var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());
app.use(express.json());

let uusId= 0;
let todoItems = [];

app.put('/', function(req, res){

});

app.delete('/', function(req, res){
   
});

app.post('/', function(req, res){
   console.log('olen siin');
todoItems.push({
      id: uusId++,
      isChecked: false,
      text: req.body.text
      });
   res.send(JSON.stringify(todoItems));
});


app.get('/', function (req, res) {
 
   res.send(JSON.stringify(todoItems));
});

var server = app.listen(8081, function () {
   var port = server.address().port
   console.log("Example app listening at http://localhost:%s", port)
}); 
