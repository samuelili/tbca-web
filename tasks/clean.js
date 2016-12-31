/**
 * Created by Samuel on 12/29/2016.
 */

const gulp = require('gulp');
const del = require('del');

const paths = require('./paths');

gulp.task('clean', function() {
    return del.sync(paths.dest);
});