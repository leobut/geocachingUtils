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
    csslint: {
      strict: {
        options: {
          "adjoining-classes": false,
          "ids": false,
          "box-model": false,
          "important": 2,
          "known-properties": 2,
          "box-sizing": 2,
          "overqualified-elements": 2,
          "display-property-grouping": 2,
          "bulletproof-font-face": 2,
          "compatible-vendor-prefixes": 2,
          "regex-selectors": 2,
          "errors": 2,
          "duplicate-background-images": 2,
          "duplicate-properties": 2,
          "empty-rules": 2,
          "selector-max-approaching": 2,
          "gradients": 2,
          "fallback-colors": 2,
          "font-sizes": 2,
          "font-faces": 2,
          "floats": 2,
          "star-property-hack": 2,
          "outline-none": 2,
          "import": 2,
          "order-alphabetical": 2,
          "underscore-property-hack": 2,
          "rules-count": 2,
          "qualified-headings": 2,
          "selector-max": 2,
          "shorthand": 2,
          "text-indent": 2,
          "unique-headings": 2,
          "universal-selector": 2,
          "unqualified-attributes": 2,
          "vendor-prefix": 2,
          "zero-units": 2
        },
        src: ['build/**/*.css']
      }
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
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'build/',
          src: ['**/*.css', '!**/*.min.css'],
          dest: 'build/',
          ext: '.css'
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
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-csslint');

  grunt.registerTask('cleanUp', ['clean'])
  grunt.registerTask('build', ['cleanUp', 'copy', 'jshint', 'csslint']);
  grunt.registerTask('default', ['build', 'uglify', 'cssmin', 'compress']);
};