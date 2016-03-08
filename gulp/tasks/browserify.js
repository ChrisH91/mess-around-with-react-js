/**
 * gulp/tasks/browserify.js
 *
 * Runs the browserify tasks on our Javascript and JSX files and sets up
 * watchify to watch the source directories an rerun the task on any changes
 */

var gulp       = require('gulp');
var gutil      = require('gulp-util');
var browserify = require('browserify');
var watchify   = require('watchify');
var reactify   = require('reactify');
var source     = require('vinyl-source-stream');

module.exports = function () {
  var mostRecentUpdate = 0;

  var bundler = browserify({
    entries:      ['./assets/js/app.js'],
    transform:    [reactify],
    debug:        true,
    plugin:       [watchify],
    cache:        {},
    packageCache: {}
  });

  var watcher = watchify(bundler);

  var bundle = function () {
    var now = Date.now();

    if ((now - mostRecentUpdate) < 250) {
      return;
    }

    gutil.log('Browserifying...');

    watcher
      .bundle()
      .pipe(source('app.js'))
      .pipe(gulp.dest('./public/js/'));

    mostRecentUpdate = now;
  }

  watcher.on('update', bundle);
  bundle();

  return watcher;
};
