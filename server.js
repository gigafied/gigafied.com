#!/usr/bin/env node

var fs = require("fs"),
	swig = require("swig"),
	express = require('express'),
	app = express(),
	args = require('optimist').argv,
	env = args.env || "dev",
	port = parseInt(args.p, 10) || (process.env.PORT || 8000),
	settings,
	settingsFile = "./project/settings/" + env + ".json";

if (fs.existsSync(settingsFile)) {
	settings = require(fs.existsSync(settingsFile) ? settingsFile : "./project/settings/dev.json");
}


app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', 'project/templates');

app.use("/static", express.static('project/static'));
app.use("/source", express.static('project/source'));

app.get("*", function(req, res){
	res.render("index.html", settings);
});


app.listen(process.env.PORT || port);
console.log('Listening on port ' + port);
