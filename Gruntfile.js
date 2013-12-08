/*
 * grunt-figlet
 * https://github.com/vijaytyagi/grunt-figlet
 *
 * Copyright (c) 2013 vjunloc
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // jshint: {
    //   all: [
    //     'Gruntfile.js',
    //     'tasks/*.js',
    //     '<%= nodeunit.tests %>',
    //   ],
    //   options: {
    //     jshintrc: '.jshintrc',
    //   },
    // },

    // Before generating any new files, remove any previously-created files.
    //clean: {
    //  tests: ['tmp'],
    //},

    // Configuration to be run (and then tested).
    figlet: {
      mybanner: {
        text : "Figlet",
        options : {
          log: true, 
          font: "larry3d"
        }
      } 
    }

    // Unit tests.
    //nodeunit: {
    //  tests: ['test/*_test.js'],
    //},

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'figlet', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
