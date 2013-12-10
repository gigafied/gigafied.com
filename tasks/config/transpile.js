module.exports = function(grunt) {

    //grunt.loadNpmTasks('grunt-es6-module-transpiler');

    grunt.config("transpile", {
        main: {
        type: "amd",
        files: [{
            expand: true,
            cwd : "project/source/js/",
            src: ['app/**/**.js'],
            dest: 'project/static/js/'
        }]
     }
    });

};