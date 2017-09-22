'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('serve', ['clean'], function(cb) {

  global.isBuild = false;

  runSequence(['scripts', 'styles', 'images', 'fonts', 'html'], 'watch', cb);
});
