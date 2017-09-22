'use strict';

var config       = require('../config');
var browserSync  = require('browser-sync');
var runSequence  = require('run-sequence');
var gulp         = require('gulp');
var uglify       = require('gulp-uglify');
var concat       = require('gulp-concat');

gulp.task('scripts:vendor', function() {
  return gulp.src(config.files.vendor.js)
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest(config.directories.build))
    .pipe(browserSync.stream());
});

gulp.task('scripts', function(cb){
  runSequence(['scripts:vendor'], cb);
});
