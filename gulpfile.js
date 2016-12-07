var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    vendors = {
        'js':
        [   './node_modules/jquery/dist/jquery.min.js',
            './node_modules/bootstrap/dist/js/bootstrap.min.js',
            './node_modules/angular/angular.min.js',
            './node_modules/angular-animate/angular-animate.min.js',
            './node_modules/angular-aria/angular-aria.min.js',
            './node_modules/angular-material/angular-material.min.js',
            './node_modules/angular-messages/angular-messages.min.js',
            './node_modules/angular-ui-router/release/angular-ui-router.min.js',
            './node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js',
            './node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
            './node_modules/toastr/build/toastr.min.js'
        ],
        'css': [
            './node_modules/bootstrap/dist/css/bootstrap.min.css',
            './node_modules/angular-material/angular-material.min.css',
            './node_modules/toastr/build/toastr.min.css',
            './node_modules/angular-ui-bootstrap/dist/ui-bootstrap-csp.css'
        ]
    };

gulp.task('minify',['minify-vendors'], function () {
    return gulp
        .src('./wwwroot/scripts/**/*.js')
        .pipe(concat('frontend-practice.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('./wwwroot/build/'));
});

gulp.task('minify-vendors',['minify-vendors-style'],function(){
    return gulp
    .src(vendors.js)
    .pipe(concat('frontend-practice-vendors.js'))
    .pipe(gulp.dest('./wwwroot/build/'))
});

gulp.task('minify-vendors-style', function(){
    return gulp
    .src(vendors.css)
    .pipe(concat('frontend-practice-styles.css'))
    .pipe(gulp.dest('./wwwroot/build/'))
});