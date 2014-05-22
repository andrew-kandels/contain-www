module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
          dev: {
            options: {
                style: 'expanded',
                compass: true
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
                src: 'js/*.js',
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
