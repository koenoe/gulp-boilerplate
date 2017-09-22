'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', ['clean'], function(cb) {

  cb = cb || function() {};

  global.isBuild = true;

  runSequence(['scripts', 'styles', 'images', 'fonts', 'html'], cb);
});
