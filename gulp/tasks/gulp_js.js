var gulp = require('gulp'),
    pug = require('gulp-pug'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),

    config = require('./../gulp.config.json');


// TASK: JS
gulp.task('js', function() {
    return gulp.src(config.js.src + '**/*.js')
        .pipe(gulpif(config.js.uglify, uglify()))
        .pipe(gulp.dest(config.distribution_folder + config.js.dest));
});