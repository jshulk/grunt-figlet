/*
 * grunt-figlet
 * https://github.com/vijaytyagi/grunt-figlet
 *
 * Copyright (c) 2013 vjunloc
 * Licensed under the MIT license.
 */

'use strict';

var asciify = require("asciify");

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('figlet', 'Helps you create nice banners for your project', function() {
    
    // getting async handle, will call done() once task is done.
    var done = this.async(); 

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      font: 'graffiti',
      log: false
    });

    var self = this;
    var propertyName = "figlet_"+ this.target;
    asciify( this.data.text, options.font, function(err, res){

        if( err ){
          grunt.log.error("failed to asciify", err);
          return done();
        }

        self.files.forEach( function(file){
          if( file.dest ){
            grunt.file.write(file.dest, res);
          }

        });

        grunt.config.set( propertyName, res );

        if( options.log ){
          if (process.stdout.isTTY){
              res = trimToMaxWidth(process.stdout.columns, res);
          }
          console.log( res );
        }
        done();

    });

    
  });

};

 // truncate the ascii art to fit a thing
function trimToMaxWidth (width, text) {
  var truncated = text.split('\n').map(function (line) {
    return line.substring(0, width);
  });
  return truncated.join('\n');
}
