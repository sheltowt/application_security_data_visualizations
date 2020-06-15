var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.static('cloud_security_audit/ScoutSuite/scoutsuite-report'));

app.get('/', function(req, res) {
    res.sendFile('./network_visualization/index.html', { root: __dirname });
});

app.get('/cloudappalerts', function(req, res) {
    res.sendFile('./alerts/new_alert.html', { root: __dirname });
});

app.get('/sca', function(req, res) {
    res.sendFile('./sca_visualization/index.html', { root: __dirname });
});

app.get('/sast', function(req, res) {
    res.sendFile('./sast_visualization/index.html', { root: __dirname });
});

app.get('/dast', function(req, res) {
    res.sendFile('./dast_visualization/index.html', { root: __dirname });
});

app.get('/audit', function(req, res) {
    res.sendFile('./cloud_security_audit/ScoutSuite/scoutsuite-report/aws-143762891182.html', { root: __dirname });
});

app.get('/nginx', function(req, res) {
    res.sendFile('./elasticsearch_visualizations/nginx.html', { root: __dirname });
});

app.get('/osquery', function(req, res) {
    res.sendFile('./elasticsearch_visualizations/osquery.html', { root: __dirname });
});

app.get('/securityhub', function(req, res) {
    res.sendFile('./elasticsearch_visualizations/security_hub.html', { root: __dirname });
});

app.listen(3000, function(){
	console.log('App listening on port 3000');
})