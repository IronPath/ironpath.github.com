module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      dist: {
        src: ['css/normalize.css', 'css/foundation.css', 'css/application.css'],
        dest: 'css/bundle.css'
      }
    },

    cssmin: {
      compress: {
        files: {
          "css/bundle.min.css": ["css/bundle.css"]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'cssmin']);

};