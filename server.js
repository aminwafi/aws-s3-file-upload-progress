var express = require('express');
var app = express();
var port = 4200;

app.use(express.static(__dirname + '/public'));
app.listen(port);
console.log(`App is listening on port: ${port}`);