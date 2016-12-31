/**
 * Created by Samuel on 12/29/2016.
 */

const gulp = require('gulp');

const path = require('path');
const paths = require('./paths');

// copy
gulp.task('copy', ['copy:static', 'copy:bootstrap', 'copy:jquery']);

gulp.task('copy:static', function () {
    return gulp.src(path.join(paths.static, paths.allFiles))
        .pipe(gulp.dest(paths.dest));
});

gulp.task('copy:bootstrap', function () {
    return gulp.src(path.join(paths.bower, 'bootstrap', paths.allFiles))
        .pipe(gulp.dest(path.join(paths.dest, paths.bower, 'bootstrap')));
});

gulp.task('copy:jquery', function () {
    return gulp.src(path.join(paths.bower, 'jquery', paths.allFiles))
        .pipe(gulp.dest(path.join(paths.dest, paths.bower, 'jquery')));
});
