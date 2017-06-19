// GULP
var gulp = require('gulp'),
    requireDir = require('require-dir')('./gulp/tasks/');

gulp.task('default', ['browser-sync', 'watch']);