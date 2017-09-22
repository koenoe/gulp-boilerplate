'use strict';

var config      = require('../config');
var changed     = require('gulp-changed');
var gulp        = require('gulp');
var browserSync = require('browser-sync');

gulp.task('fonts', function(){
  return gulp.src([].concat(config.files.fonts, config.files.vendor.fonts))
    .pipe(changed(`${config.directories.build}/fonts`)) // Ignore unchanged files
    .pipe(gulp.dest(`${config.directories.build}/fonts`))
    .pipe(browserSync.stream());
});
