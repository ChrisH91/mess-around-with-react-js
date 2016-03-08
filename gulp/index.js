/**
 * gulp/index.js
 *
 * Responsible for iterating through all the available files in the tasks
 * folder and creating gulp tasks from them
 */

var gulp  = require('gulp');
var gutil = require('gulp-util');

module.exports = function (tasks) {
  tasks.forEach(function (name) {
    var task = require('./tasks/' + name);
    var dependencies = [];

    // If a task has dependencies it will pass in an object with dependencies
    // and tasks parameters rather than just a function.
    //
    // Some tasks will also be groups of tasks, in which case the task file
    // will return an array.

    if (typeof task === 'function') {
      gulp.task(name, require('./tasks/' + name));
    } else if (Array.isArray(task)) {
      gulp.task(name, task);
    } else {
      if (typeof task.dependencies !== 'undefined') {
        dependencies = task.dependencies;
      }

      if (typeof task.task === 'function') {
        gulp.task(name, dependencies, task.task);
      } else {
        gutil.log(gutil.colors.red(
          'Unable to parse task ' + name
        ));
      }
    }
  });

  return gulp;
};
