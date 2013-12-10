module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.config("uglify", {
		components: {
			files: {
				'project/static/js/components/ember.min.js': ['project/source/js/components/ember/ember.js'],
				'project/static/js/components/require.min.js': ['project/source/js/components/requirejs/require.js'],
				'project/static/js/components/handlebars.min.js': ['project/source/js/components/handlebars/handlebars.amd.js']
			}

		}

	});
};