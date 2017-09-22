'use strict';

var config       = require('../config');
var gulp         = require('gulp');
var gulpif       = require('gulp-if');
var sourcemaps   = require('gulp-sourcemaps');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync  = require('browser-sync');
var cleancss     = require('gulp-clean-css');
var bulkSass     = require('gulp-sass-bulk-import');

gulp.task('styles', function () {
  var createSourcemap = !global.isBuild;
  return gulp.src(`${config.directories.src}/app.scss`)
    .pipe(sourcemaps.init())
    .pipe(bulkSass())
    .pipe(
      sass({
        sourceComments: !global.isBuild,
        includePaths: [].concat(config.files.scss, config.files.vendor.scss),
      }).on('error', sass.logError)
    )
    .pipe(gulpif(global.isBuild, cleancss()))
    .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 8'))
    .pipe(gulpif(createSourcemap, sourcemaps.write('.')))
    .pipe(gulp.dest(config.directories.build))
    .pipe(browserSync.stream());
});
