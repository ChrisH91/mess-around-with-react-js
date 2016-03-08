/**
 * gulp/tasks/copy-lib-css.js
 *
 * Copy vendor css files into the public output directory
 */

var gulp = require('gulp');

module.exports = function () {
  return gulp
    .src([
      'bower_components/bootstrap/dist/css/bootstrap.min.css*'
    ])
    .pipe(gulp.dest('public/css'));
};
