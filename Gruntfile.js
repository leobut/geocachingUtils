module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compress: {
      main: {
        options: {
          archive: 'GeocachingUtils_<%= pkg.version %>.zip'
        },
        files: [
          {
            src: ['source/**']
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
        bitwise: true,
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