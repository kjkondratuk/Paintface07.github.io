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
                    "dist/styles.css": "src/**/*.less"
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
                    {expand: true, src: ['src/**.html'], dest: 'dist/'},
                    {expand: true, flatten: true, src: ['node_modules/angular/angular.min.js'], dest: 'dist/'}
                ]
            }
        }, uglify: {
            main: {
                files: {
                    'dist/script.js': [
                        'src/**/*.module.js',
                        'src/**/*.controller.js'
                    ]
                }
            }
        }
    });

    grunt.registerTask('default', [ 'less', 'uglify', 'copy' ]);
    grunt.registerTask('test', [ 'default', 'connect' ])

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-connect');
};