module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
          dev: {
            options: {
                style: 'expanded',
                compass: true,
                // sourcemap: true,
                lineNumbers: true,
                loadPath: 'vendor/twbs/bootstrap-sass/vendor/assets/stylesheets'
            },
            files: {
                'public/css/style.css': 'sass/style.scss'
            }
          },
          dist: {
            options: {
                style: 'compressed',
                compass: true
            },
            files: {
                '<%= project.assets %>/css/style.css': '<%= project.css %>'
            }
          }
        },
        watch: {
          sass: {
              files: '<%= project.src %>/sass/{,*/}*.{scss,sass}',
              tasks: ['sass:dev']
          }
        },
        uglify: {
            build: {
                src: [
                    'js/jquery-1.11.1.js',
                    'vendor/twbs/bootstrap-sass/vendor/assets/javascripts/bootstrap/affix.js',
                    'vendor/twbs/bootstrap-sass/vendor/assets/javascripts/bootstrap/alert.js',
                    'vendor/twbs/bootstrap-sass/vendor/assets/javascripts/bootstrap/button.js',
                    'vendor/twbs/bootstrap-sass/vendor/assets/javascripts/bootstrap/carousel.js',
                    'vendor/twbs/bootstrap-sass/vendor/assets/javascripts/bootstrap/collapse.js',
                    'vendor/twbs/bootstrap-sass/vendor/assets/javascripts/bootstrap/dropdown.js',
                    'vendor/twbs/bootstrap-sass/vendor/assets/javascripts/bootstrap/tab.js',
                    'vendor/twbs/bootstrap-sass/vendor/assets/javascripts/bootstrap/transition.js',
                    'vendor/twbs/bootstrap-sass/vendor/assets/javascripts/bootstrap/scrollspy.js',
                    'vendor/twbs/bootstrap-sass/vendor/assets/javascripts/bootstrap/modal.js',
                    'vendor/twbs/bootstrap-sass/vendor/assets/javascripts/bootstrap/tooltip.js',
                    'vendor/twbs/bootstrap-sass/vendor/assets/javascripts/bootstrap/popover.js',
                    'js/prism.js'
                ],
                dest: 'public/js/script.min.js'
            }
        }
    });

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.registerTask('default', [
        'sass:dev',
        'watch'
    ]);
    grunt.registerTask('default', ['uglify', 'sass:dev']);
};
