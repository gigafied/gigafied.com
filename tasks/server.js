
module.exports = function(grunt) {

	"use strict";

	var child;

	grunt.registerTask('start_server', 'Start a local web server', function(port) {

 		var done = this.async();

		port = port || 8000;

		if (child) {
			child.kill();
		}

		child = grunt.util.spawn({cmd : process.argv[0], args : ["server.js", "-p", port]}, function () {
			done();
		});

		child.stdout.pipe(process.stdout);
		child.stderr.pipe(process.stderr);
	});

	grunt.registerTask('server', 'Run a local web server', function(port) {

		grunt.task.run("watch:server");
	});

};
