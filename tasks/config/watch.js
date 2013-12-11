module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.config("watch", {
		css: {
			files: 'project/source/css/*.styl',
			tasks: ['stylus'],
			options: {
				livereload: true
			}
		},
		server: {
			files: ['project/source/**/*', '!project/source/js/components/**/*', 'project/templates/**/*'],
			tasks: ['start_server'],
			options: {
				spawn : false,
				atBegin : true,
				interrupt: true,
				livereload : true
			},
		}
	});

};