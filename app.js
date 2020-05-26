var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('hello world');
})

app.get('/sca', function(req, res) {
    res.sendFile('./sca_visualization/index.html', { root: __dirname });
});

app.get('/sast', function(req, res) {
    res.sendFile('./sast_visualization/index.html', { root: __dirname });
});

app.get('/dast', function(req, res) {
    res.sendFile('./dast_visualization/index.html', { root: __dirname });
});

app.listen(3000, function(){
	console.log('App listening on port 3000');
})