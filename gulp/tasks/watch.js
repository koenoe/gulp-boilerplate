'use strict';

var config = require('../config');
var gulp   = require('gulp');

gulp.task('watch', ['browserSync'], function() {

  global.isWatching = true;

  gulp.watch(config.files.scss,                        ['styles']);
  gulp.watch(`${config.directories.src}/**/*.html`,    ['html']);
  gulp.watch(config.files.fonts,                       ['fonts']);
  gulp.watch(config.files.img,                         ['images:default']);
  gulp.watch(config.files.vector,                      ['images:vector']);
});
