/**
 * gulp/tasks/watch.js
 *
 * Watches static directories and copies across and modifications or new files
 * as well as watching and compiling scss on changes.
 */

var gulp = require('gulp');

module.exports = function () {
  gulp.watch('static/**/*', ['copy']);
  gulp.watch('assets/css/app.scss', ['sass']);
};
