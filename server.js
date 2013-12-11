#!/usr/bin/env node

var swig = require("swig"),
	express = require('express'),
	app = express(),
	args = require('optimist').argv,
	port = parseInt(args.p, 10) || 8000;


app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', 'project/templates');

app.use("/static", express.static('project/static'));
app.use("/source", express.static('project/source'));

app.get("*", function(req, res){
	res.render("index.html");
});


app.listen(port);
console.log('Listening on port ' + port);
