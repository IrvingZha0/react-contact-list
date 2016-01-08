var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

var APP_DIRECTORY = 'src'
var BUILD_DIRECTORY = 'build'

gulp.task('build:js', function() {
    browserify({
        entries: APP_DIRECTORY + '/js/index.js',
        debug: true,
    })
    .transform(babelify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(BUILD_DIRECTORY + '/js'));
});

gulp.task('watch:js', ['build:js'], function() {
    gulp.watch('src/js/**/*.js', ['build:js']);
});

gulp.task('build', ['build:js']);
gulp.task('watch', ['watch:js']);
gulp.task('default', ['build']);
