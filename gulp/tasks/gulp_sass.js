var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    gulpif = require('gulp-if'),

    config = require('./../gulp.config.json');

gulp.task('sass', function() {
  return gulp.src(config.sass.src + config.sass.mainFile + ".{scss, sass}")
    .pipe(gulpif(config.sass.sourcemaps, sourcemaps.init()))
    .pipe(gulpif(config.sass.logError, sass().on('error', sass.logError)))
    .pipe(gulpif(config.sass.autoprefix, autoprefixer('last 2 version')))
    .pipe(gulp.dest(config.distribution_folder + config.sass.dest))
    .pipe(gulpif(config.sass.minify, rename({suffix: '.min'})))
    .pipe(gulpif(config.sass.minify, cssnano()))
    .pipe(gulpif(config.sass.sourcemaps, sourcemaps.write('./')))
    .pipe(gulp.dest(config.distribution_folder + config.sass.dest))
});