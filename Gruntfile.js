module.exports = function(grunt) {

	grunt.initConfig({});

	grunt.loadNpmTasks("grunt-tasks-lister");

	grunt.loadTasks('tasks');
	grunt.loadTasks('tasks/config');

	grunt.registerTask('default', ['tasks']);
};