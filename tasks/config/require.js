module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-requirejs');

	grunt.config("requirejs", {
		compile: {
			options: {
				baseUrl: "project/source/js",
				mainConfigFile: "project/source/js/config.js",
				out: "project/static/js/app.min.js",
				optimize : "uglify",
				paths : {
					"requirejs" : "components/requirejs/require"
				},
				include : [
					"requirejs",
					"config",
					"app/App",
					"app/Router",
					"app/Controllers",
					"app/Views",
					"app/Templates"
				]
			}
		}
	});

};
