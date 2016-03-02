var gulp       = require('gulp');
var browserify = require('browserify');
var watchify   = require('watchify');
var reactify   = require('reactify');
var source     = require('vinyl-source-stream');

module.exports = function () {
  var bundler = browserify({
    entries:      ['./assets/js/app.js'],
    transform:    [reactify],
    debug:        true,
    plugin:       [watchify],
    cache:        {},
    packageCache: {}
  });

  bundler
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./public/js/'));
};
