module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.config("watch", {
		css: {
			files: 'project/source/css/*.styl',
			tasks: ['stylus'],
			options: {
				livereload: true
			}
		}
	});

};