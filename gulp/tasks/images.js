'use strict';

var config      = require('../config');
var changed     = require('gulp-changed');
var gulp        = require('gulp');
var gulpif      = require('gulp-if');
var imagemin    = require('gulp-imagemin');
var svgmin      = require('gulp-svgmin');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');

gulp.task('images:default', function() {
  return gulp.src(config.files.img)
    .pipe(changed(`${config.directories.build}/img`)) // Ignore unchanged files
    .pipe(gulpif(global.isBuild, imagemin())) // Optimize
    .pipe(gulp.dest(`${config.directories.build}/img`))
    .pipe(browserSync.stream());
});

gulp.task('images:vector', function() {
  return gulp.src(config.files.vector)
    .pipe(changed(`${config.directories.build}/img`)) // Ignore unchanged files
    .pipe(svgmin({
      js2svg: {
        pretty: true,
      },
      plugins: [
        { removeComments: true },
        { removeDoctype: true },
        { mergePaths: false },
        { cleanupIDs: false},
        { cleanupNumericValues: { floatPrecision: 2 } },
      ],
    }))
    .pipe(gulp.dest(`${config.directories.build}/img`))
    .pipe(browserSync.stream());
});

gulp.task('images', function(cb){
  runSequence(['images:default', 'images:vector'], cb);
});
