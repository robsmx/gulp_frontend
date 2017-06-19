var gulp = require('gulp'),
    pug = require('gulp-pug'),

    config = require('./../gulp.config.json');

gulp.task('pug', function () {
  return gulp.src(config.pug.src + config.pug.mainFile)
    .pipe(pug({
        data: {
            title: config.pug.data.title,
            css_to_include: config.pug.data.css_to_include,
            js_to_include: config.pug.data.js_to_include,
        }
    }))
    .pipe(gulp.dest(config.distribution_folder + config.pug.dest));
});