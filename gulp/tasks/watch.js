var gulp = require('gulp');

module.exports = function () {
  gulp.watch('static/**/*', ['copy']);
};
