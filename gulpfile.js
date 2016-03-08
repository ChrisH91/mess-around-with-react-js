/**
 * gulpfile.js
 *
 * Each gulp task is stored in a seperate file and imported when the gulpfile
 * is loaded.
 *
 * To see what each individual task does see gulp/tasks/<name>.js
 */

var gulp = require('./gulp')([
  'browserify',
  'copy-lib-css',
  'copy',
  'watch',
  'dev'
]);
