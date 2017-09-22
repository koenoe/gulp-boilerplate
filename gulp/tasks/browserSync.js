'use strict';

var config      = require('../config');
var url         = require('url');
var browserSync = require('browser-sync');
var gulp        = require('gulp');

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: config.directories.build,
    },
    port: config.ports.browser,
    ui: {
      port: config.ports.ui,
    },
    ghostMode: {
      links: false,
    }
  });
});
