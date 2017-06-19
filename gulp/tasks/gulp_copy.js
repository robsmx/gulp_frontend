var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    gulpif = require('gulp-if'),

    config = require('./../gulp.config.json');

gulp.task('copy', function () {
  return gulp.src(config.copy.src + "**/*")
    .pipe(gulpif('*{.jpg, .gif, .png}', cache(imagemin())))
    .pipe(gulp.dest(config.distribution_folder));
});