module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.config("jshint", {
		all: {
			files : [
				{src: 'Gruntfile.js'},
				{src: 'tasks/**.js'},
				{src: 'project/source/js/app/**.js'}
			],
			options: {
				jshintrc: '.jshintrc'
			}
		}
	});
};