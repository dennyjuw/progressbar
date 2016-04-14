
// Include gulp
var gulp = require('gulp');

// Plugins
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var mocha = require('gulp-mocha');

// File destinations.
var paths = new (function () {
    
    this.root = '.';
    
    // source
    this.cssFrom = this.root + '/source/css';
    this.jsFrom = this.root + '/source/js';
    this.testFrom = this.root + '/test/test.js';

    // destination
    this.cssDestination = this.root + '/public/stylesheets';
    this.jsDestination = this.root + '/public/js';
    
})();

// Configs
var configs = {
    sass: {
        outputStyle: 'compressed'
    }
};

//-----------------------------------------------------------------
//  Tasks.
//-----------------------------------------------------------------

// Compile sass.
gulp.task('sass', function () {
    return gulp.src(paths.cssFrom + '/**/*.scss')
        .pipe(sass(configs.sass))
        .pipe(gulp.dest(paths.cssDestination))
});


// Lint JS
gulp.task('jshint', function () {
    return gulp.src(paths.jsFrom + '/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Minify JS
gulp.task('js-uglify', function () {
    return gulp.src(paths.jsFrom + '/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest(paths.jsDestination));
});

//-----------------------------------------------------------------
// TDD task should go here
//-----------------------------------------------------------------
/*
gulp.task('run-test', function () {
    return gulp.src(paths.testFrom, {read: false}) 
        .pipe(mocha({reporter: 'nyan'}));
});
*/

//-----------------------------------------------------------------
// Default task.
//-----------------------------------------------------------------

gulp.task('default', ['sass', 'jshint', 'js-uglify']);