// Variables for requires

var gulp;

// Requires

require('./gulp/stylesheets');

// Gulp tasks

gulp = require('gulp');

gulp.task('default', []);

gulp.task('build' , []);

gulp.task('dev' , ['style']);

gulp.task('test' , []);
