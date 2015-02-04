module.exports = function(grunt) {

  grunt.initConfig({
    jasmine_node: {
      all: ['spec/']
      },
      watch: {
        all: ['**/*.js'],
        tasks: ['jshint']
      },
      jshint: {
        all: ['Gruntfile.js', 'spec/**/*.js', 'src/**/*.js']
      }
  });

  grunt.loadNpmTasks('grunt-jasmine-node');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint', 'jasmine_node']);
  grunt.registerTask('Cop', ['jshint']);
};