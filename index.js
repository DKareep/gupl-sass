/**
 * Created by dkareep on 9/1/15.
 */

'use strict';
var gulp = require("gulp"),
    sass = require("gulp-sass"),
    watch = require("gulp-watch"),
    plumber = require("gulp-plumber"),
    minify = require("gulp-minify-css"),
    rename = require("gulp-rename"),
    autoprefixer = require("gulp-autoprefixer");

var dest_css = "./css/";
var src_sass = "./css/*.sass";
gulp.task('sass',function() {
    gulp.src(src_sass)
        .pipe(watch(src_sass))
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer({
                browsers: [
                    '> 1%',
                    'last 2 versions',
                    'firefox >= 4',
                    'safari 7',
                    'safari 8',
                    'IE 8',
                    'IE 9',
                    'IE 10',
                    'IE 11'
                ],
                cascade: false
            }
        ))
        .pipe(gulp.dest(dest_css))
        .pipe(minify())
        .pipe(rename({
            extname : ".min.css"
        }))
        .pipe(gulp.dest(dest_css))
});
gulp.task('default',['sass'],function(){});