module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-stylus');

	grunt.config("stylus", {
		compile: {
			options: {
				paths: [],
				urlfunc: 'embedurl', // use embedurl('test.png') in our code to trigger Data URI embedding
				use: [
					
				],
				import: [
				]
			},
			files: {
				'project/static/css/style.css': ['project/source/css/*.styl'] // compile and concat into single file
			}
		}
	});
};