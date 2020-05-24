var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('hello world');
})

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, function(){
	console.log('App listening on port 3000');
})