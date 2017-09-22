'use strict';

var fs = require('fs');
var gulp = require('gulp');

// Ensure process ends after all Gulp tasks are finished
gulp.on('stop', function() {
  if (!global.isWatching) {
    process.nextTick(function () {
      process.exit(0);
    });
  }
});

fs.readdirSync('./gulp/tasks/').forEach(function(task) {
  require('./tasks/' + task);
});
