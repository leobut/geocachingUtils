module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compress: {
      main: {
        options: {
          archive: 'Geocaching_Utils.zip'
        },
        files: [
          {
            src: ['source/**'],
            dest: ''
          }
        ]
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        esnext: true,
        globals: {
          jQuery: true
        },
        ignores: [
          'node_modules/**/*.js', 
          'source/js/lib/**/*.js'
        ]
      },
      all: ['**/*.js']
     }
  });

  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('build', ['jshint']);
  grunt.registerTask('package', ['compress']);
  grunt.registerTask('default', ['build', 'package']);
};