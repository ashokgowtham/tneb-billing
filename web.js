var express = require("express");
var tnebBiller = require("tnebBiller");

var app = express();
var tnebBiller = tnebBiller();
app.use(express.logger());

app.get('/', function(request, response) {
	var html = tnebBiller.Calculate(request);
	response.send(html);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening on " + port);
});