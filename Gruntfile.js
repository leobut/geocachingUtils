module.exports = function(grunt){

	require('load-grunt-tasks')(grunt);

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
		eslint: {
			options: {
				configFile: '.eslintrc'
			},
			target: ['build/**/*.js', '!**/*.min.js']
		},
		csslint: {
			strict: {
			options: {
				csslintrc: '.csslintrc'
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
		'json-minify': {
			build: {
			files: 'build/**/*.json'
			}
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
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-json-minify');

	grunt.registerTask('cleanUp', ['clean'])
	grunt.registerTask('build', ['cleanUp', 'copy', 'eslint', 'csslint']);
	grunt.registerTask('default', ['build', 'uglify', 'cssmin', 'json-minify', 'compress']);
};