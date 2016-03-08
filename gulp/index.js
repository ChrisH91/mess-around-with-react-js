var gulp  = require('gulp');
var gutil = require('gulp-util');

module.exports = function (tasks) {
  tasks.forEach(function (name) {
    var task = require('./tasks/' + name);
    var dependencies = [];

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
