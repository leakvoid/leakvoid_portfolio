
/* initialization */
var express = require('express');
var path = require('path');

var app = express();
var port = process.env.PORT || 3000;

/* routing */
app.get('/', function(req, res) {
    res.sendFile( process.cwd() + '/public/home.html' );
});

app.get('/favicon.ico', function(req, res) {
    res.end('favicon handler');
});

app.use( express.static(process.cwd() + '/public') );

app.use(function(req, res) {
    res.end('404!');
});

app.listen(port, function() {
    console.log("Server is running on port " + port);
});
