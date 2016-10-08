module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    manifest: grunt.file.readJSON('source/manifest.json'),
    compress: {
      main: {
        options: {
          archive: 'GeocachingUtils_<%= manifest.version %>.zip'
        },
        files: [
          {
            src: ['build/**']
          }
        ]
      }
    },
    copy: {
      build: {
        expand: true,
        cwd: 'source',
        src: '**',
        dest: 'build',
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
          'build/js/lib/**/*.js'
        ]
      },
      all: ['build/**/*.js']
    },
    uglify: {
      all: {
        files: [{
            expand: true,
            cwd: 'build/',
            src: ['**/*.js', '!**/*.min.js'],
            dest: 'build/',
            ext: '.js'
        }]
      }
    },
    clean: {
      build: ['build/'],
      release: ['GeocachingUtils_*.zip']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('cleanUp', ['clean'])
  grunt.registerTask('build', ['cleanUp', 'copy', 'jshint']);
  grunt.registerTask('default', ['build', 'uglify', 'compress']);
};