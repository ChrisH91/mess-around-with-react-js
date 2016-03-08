var gulp = require('gulp');

module.exports = function () {
  return gulp
    .src([
      'bower_components/bootstrap/dist/css/bootstrap.min.css*'
    ])
    .pipe(gulp.dest('public/css'));
};
