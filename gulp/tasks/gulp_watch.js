var gulp = require('gulp'),
    browserSync = require('browser-sync').create();

    config = require('./../gulp.config.json');


gulp.task('browser-sync', ['sass', 'js', 'copy', 'pug'], function(){
browserSync.init({
    server: config.distribution_folder
});
});

gulp.task('watch', function () {
gulp.watch('./src/js/**/*.js', ['js']);
gulp.watch('./src/sass/**/*.{scss, sass}', ['sass']);
gulp.watch('./src/pug/**/*.pug', ['pug']);
gulp.watch('./src/assets/**/*', ['copy']);
gulp.watch('./dist/**/*').on('change', browserSync.reload);
});