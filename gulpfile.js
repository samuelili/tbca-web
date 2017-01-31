const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const path = require('path');

gulp.task('default', ['build:sass', 'watch']);

gulp.task('build:sass', function() {
  return gulp.src('sass/styles.scss')
    .pipe(sass({
      importer: function(url) {
        if (url[0] == '~')
          url = url.substr(1);
        return {
          file: url
        }
      },
      includePaths: ['node_modules/'],
    }).on('error', sass.logError))
    .pipe(rename(function(path) {
      path.basename = "App";
    }))
    .pipe(gulp.dest('src'));
});

gulp.task('watch', function() {
  gulp.watch('sass/*.scss', ['build:sass']);
});