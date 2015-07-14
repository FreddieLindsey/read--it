var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');

gulp.task('compile-sass', function() {
  gulp.src('app/assets/stylesheets/**/*.sass')
      .pipe(sass({ indentedSyntax: true, errLogToConsole: true }))
      .pipe(gulp.dest('public/assets'));
});

gulp.task('compile-scss', function() {
  gulp.src('app/assets/stylesheets/**/*.scss')
      .pipe(sass({ indentedSyntax: false, errLogToConsole: true }))
      .pipe(gulp.dest('public/assets'));
});

module.exports = gulp.task('style', ['compile-sass', 'compile-scss']);
