var gulp = require('gulp'),
    pug = require('gulp-pug'),

    config = require('./../gulp.config.json');

gulp.task('pug', function () {
  return gulp.src(config.pug.src + "*.pug")
    .pipe(pug())
    .pipe(gulp.dest(config.distribution_folder + config.pug.dest));
});