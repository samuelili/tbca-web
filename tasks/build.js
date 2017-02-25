/**
 * Created by Samuel on 12/29/2016.
 */

const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const marked = require('marked');

const path = require('path');
const paths = require('./paths');
const fs = require('fs');

gulp.task('build', ['build:pug', 'build:sass']);

gulp.task('build:pug', function () {
    var articlesRaw = JSON.parse(fs.readFileSync('articles/news.json', 'utf-8'));
    var articles = [];
    for (var i = 0; i < articlesRaw.length; i++) {
        var article = articlesRaw[i];
        articles.push({ // copy data and read from mdFile
            title: article.title,
            date: article.date,
            markdown: marked(fs.readFileSync('articles/' + article.mdFile, 'utf-8')),
            fullLink: article.fullLink
        });
    }

    return gulp.src(path.join(paths.src, '**/[^_]*.pug'))
        .pipe(pug({
            data: {
                articles: articles
            }
        }).on('error', function (e) {
            console.log(e);
        }))
        .pipe(gulp.dest(paths.dest));
});

gulp.task('build:sass', function () {
    return gulp.src(path.join(paths.src, '**/*.scss'))
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(gulp.dest(paths.dest));
});
