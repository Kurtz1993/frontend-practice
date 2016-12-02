var gulp = require('gulp'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify');

gulp.task('minify',function(){
    return gulp
    .src('./wwwroot/scripts/**/*.js')
    .pipe(concat('frontend-practice.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./wwwroot/build/'));
});