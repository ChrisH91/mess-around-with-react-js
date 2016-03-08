/**
 * gulp/tasks/copy-lib-css.js
 *
 * Watches static directories and copies across and modifications or new files
 */

var gulp = require('gulp');

module.exports = function () {
  gulp.watch('static/**/*', ['copy']);
};
