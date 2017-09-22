'use strict';

var config = require('../config');
var ejs = require('gulp-ejs');
var gulp   = require('gulp');
var gulpif = require('gulp-if');
var gutil = require('gulp-util')
var htmlmin = require('gulp-htmlmin');
var browserSync  = require('browser-sync');

gulp.task('html', function() {
  return gulp
    .src(config.files.html)
    .pipe(ejs({}, { ext:'.html' }).on('error', gutil.log))
    .pipe(gulpif(global.isBuild, htmlmin({collapseWhitespace: true}))) // Optimize
    .pipe(gulp.dest(config.directories.build))
    .pipe(browserSync.stream());
});
