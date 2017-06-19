var gulp = require('gulp'),
    del = require('del');


gulp.task('deldist', function() {
  return del.sync('dist');
})