/**
 * gulp/tasks/copy.js
 *
 * Copy our static files into the public output directory
 */

var gulp = require('gulp');

module.exports = function () {
  return gulp
    .src([
      'static/**/*',
    ])
    .pipe(gulp.dest('public/'));
};
