module.exports = function(grunt) {
    const sass = require('node-sass');
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        manifest: grunt.file.readJSON('source/manifest.json'),
        compress: {
            main: {
                options: {
                    archive: 'GeocachingUtils_<%= manifest.version %>.zip'
                },
                files: [{
                    src: ['build/**']
                }]
            }
        },
        copy: {
            main: {
                files: [{
                        expand: true,
                        cwd: 'source/_locales/',
                        src: ['**'],
                        dest: 'build/_locales/'
                    },
                    {
                        expand: true,
                        cwd: 'source/img/',
                        src: ['**', '!appIcon/*Raw.png'],
                        dest: 'build/img/'
                    },
                    {
                        expand: true,
                        cwd: 'source/js/',
                        src: ['**'],
                        dest: 'build/js/'
                    },
                    {
                        expand: true,
                        cwd: 'source/popup/',
                        src: ['**'],
                        dest: 'build/popup/'
                    },
                    {
                        expand: true,
                        cwd: 'source/settings/',
                        src: ['**', '!*.scss'],
                        dest: 'build/settings/'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: ['source/manifest.json'],
                        dest: 'build/'
                    }
                ]
            }
        },
        eslint: {
            options: {
                configFile: '.eslintrc.yml'
            },
            target: ['source/**/*.js', '!**/*.min.js']
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
        'json-minify': {
            build: {
                files: 'build/**/*.json'
            }
        },
        htmlmin: {
            main: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                    collapseInlineTagWhitespace: true
                },
                files: {
                    'build/popup/popup.html': 'build/popup/popup.html',
                    'build/settings/settings.html': 'build/settings/settings.html'
                }
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
        sass: {
            options: {
                implementation: sass
            },
            dist: {
                files: {
                    'build/css/style.css': 'source/scss/style.scss',
                    'build/settings/style.css': 'source/settings/style.scss'
                }
            }
        },
        sasslint: {
            options: {
                configFile: '.sass-lint.yml',
            },
            target: ['source/**/*.scss'],
            formatter: "compact"
        },
        clean: {
            build: ['build/'],
            release: ['GeocachingUtils_*.zip']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-json-minify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-sass-lint');

    grunt.registerTask('build', ['copy', 'sass']);
    grunt.registerTask('quality', ['eslint', 'sasslint']);
    grunt.registerTask('minify', ['uglify', 'htmlmin', 'cssmin', 'json-minify']);
    grunt.registerTask('default', ['clean', 'build', 'quality', 'minify', 'compress']);
};