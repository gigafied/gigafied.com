
module.exports = function(grunt) {

	"use strict";

	grunt.registerTask('server', 'Start a local web server', function() {

 		var done = this.async();

		var swig = require("swig"),
			express = require('express'),
			app = express();

		app.engine('html', swig.renderFile);
		app.set('view engine', 'html');
		app.set('views', 'project/templates');

		app.use("/static", express.static('project/static'));
		app.use("/source", express.static('project/source'));

		app.get("*", function(req, res){
			res.render("index.html");
		});


		app.listen(8000);
		console.log('Listening on port 8000');

	});

};
