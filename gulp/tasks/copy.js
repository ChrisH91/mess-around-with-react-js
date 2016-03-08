var gulp = require('gulp');

module.exports = function () {
  return gulp
    .src([
      'static/**/*',
    ])
    .pipe(gulp.dest('public/'));
};
