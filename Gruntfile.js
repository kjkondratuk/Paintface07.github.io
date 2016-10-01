module.exports = function(grunt) {
    grunt.initConfig({
        pkg: '<json:package.json>',
        less: {
            main: {
                options: {
                    paths:['src'],
                    compress: true,
                    yuicompress: true
                }, files: {
                    "build/styles.css": "src/**/*.less"
                }
            }
        }, connect: {
            test: {
                options: {
                    port: 1337,
                    base: './'
                }
            }
        }, copy: {
            main: {
                files: [
                    {expand: true, src: ['src/**/*.html'], dest: 'dist/'},
                    {expand: true, flatten: true, src: ['node_modules/angular/angular.min.js'], dest: 'build/'},
                    {expand: true, flatten: true, src: ['node_modules/angular-ui-router/release/angular-ui-router.min.js'], dest: 'build/'},
                ]
            }
        }, uglify: {
            main: {
                files: {
                    'build/script.js': [
                        'src/**/*.module.js',
                        'src/**/*.config.js',
                        'src/**/*.routes.js',
                        'src/**/*.controller.js'
                    ]
                }
            }
        }, concat: {
            js: {
                src: [
                    'build/angular.min.js',
                    'build/angular-ui-router.min.js',
                    'build/script.js'
                ],
                dest: 'dist/script.js'
            }, css: {
                src: ['build/styles.css'],
                dest: 'dist/styles.css'
            }
        }, watch: {
            content: {
                files: ['!dist/', '**/*.js', '**/*.html', '**/*.less', '**/*.json', '*.js', '*.html', '*.less', '*.json'],
                tasks: ['default']
            }
        }
    });

    grunt.registerTask('default', [ 'less', 'uglify', 'copy', 'concat' ]);
    grunt.registerTask('dev', ['default', 'watch']);
    grunt.registerTask('test', [ 'default', 'connect' ])

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-connect');
};