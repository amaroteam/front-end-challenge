module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
    
        cssmin: {
            target: {
                files: {
                    'public/dist/css/vendor.min.css': 'src/assets/css/temp/vendor.css',
                    'public/dist/css/styles.min.css': 'src/assets/css/temp/styles.css'
                }
            }
        },

        sass: {
            dist: {
              files: {
                'src/assets/css/temp/styles.css': 'src/assets/sass/styles.scss'
              }
            }
        },
 
        jshint: {
            jsFiles: ['Gruntfile.js', 'src/assets/js/*.js', 'src/assets/js/**/*.js']                             
        },
 
        concat: {
            css: {
                files: {'src/assets/css/temp/vendor.css': 'src/assets/css/vendor/*.css' }
            },
            js: {
                files: {
                    'src/assets/js/temp/vendor.js': [
                        'src/assets/js/vendor/angular.min.js',
                        'src/assets/js/vendor/angular-route.min.js',
                        'src/assets/js/vendor/angular-cookies.min.js'
                    ],
                    'src/assets/js/temp/app.js': [
                        'src/assets/js/app/app.js', 
                        'src/assets/js/app/appCtrl.js', 
                        'src/assets/js/app/appSrv.js'
                    ]
                }
            }
        },
 
        uglify: {
            bundle: {
                files: {
                    'public/dist/js/vendor.min.js': 'src/assets/js/temp/vendor.js',
                    'public/dist/js/app.min.js': 'src/assets/js/temp/app.js'
                }
            }
        },

        copy: {
          main: {
            files: [
                {
                    expand: true,
                    cwd: 'src/assets/css/fonts', 
                    src: [ '**', '!**/*.html', '!**/*.css', '!**/*.scss' ],
                    dest: 'public/dist/css/fonts'              
                }
            ]            
          }          
        },

        watch: {
            scripts: {
                files: 'src/assets/js/**/*.js',
                tasks: ['concat', 'uglify:bundle'],
                options: {
                  nospawn: true,
                }              
            },
            css: {
                files: ['src/assets/sass/*.scss', 'src/assets/sass/partials/*.scss'],
                tasks: ['sass', 'concat', 'cssmin:target'],
                options: {
                  nospawn: true,
                }   
            }
        }
    });

    
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
 
    grunt.registerTask('default', ['watch', 'cssmin:target', 'sass', 'jshint:jsFiles', 'concat:js', 'uglify:bundle', 'copy:main']);
};