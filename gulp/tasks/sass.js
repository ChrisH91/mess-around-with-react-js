/**
 * gulp/tasks/sass.js
 *
 * Compiles our SCSS source code into CSS
 */

var gulp = require('gulp');
var sass = require('gulp-sass');

module.exports = function () {
  return gulp
    .src([
      'assets/css/app.scss'
    ])
    .pipe(sass())
    .pipe(gulp.dest('public/css'));
};
