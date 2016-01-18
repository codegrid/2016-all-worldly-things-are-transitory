module.exports = function(grunt){

  var AUTOPREFIXER_BROWSERS = [
    'ie >= 9',
    'safari >= 7',
    'ios >= 7',
    'android >= 4'
  ];

  grunt.initConfig({

    sass: {
      dist: {
        files: {
          'grunt-build/styles.css': 'grunt-src/styles.scss'
        }
      }
    },

    autoprefixer: {
      single_file: {
        options: {
          browsers: AUTOPREFIXER_BROWSERS
        },
        src: 'grunt-build/styles.css',
        dest: 'grunt-build/styles.css'
      },
    },

    cssmin: {
      target: {
        files: {
          'grunt-build/styles.min.css': ['grunt-build/styles.css']
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['sass', 'autoprefixer', 'cssmin']);

}
