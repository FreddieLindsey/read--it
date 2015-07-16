var gulp, sass, sourcemaps, browserify, reactify, vinyl_source;

gulp = require('gulp');
sass = require('gulp-sass');
sourcemaps = require('gulp-sourcemaps');
browserify = require('browserify');
reactify = require('reactify');
source = require('vinyl-source-stream');

gulp.task('default', ['compile-sass', 'compile-scss', 'compile-js']);

// sass
gulp.task('compile-sass', function () {
    gulp.src('app/assets/stylesheets/**/*.sass')
      .pipe(sourcemaps.init())
      .pipe(sass({ indentedSyntax: true, errLogToConsole: true }))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('public/assets'));
  });

// scss
gulp.task('compile-scss', function () {
    gulp.src('app/assets/stylesheets/**/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass({ indentedSyntax: true, errLogToConsole: true }))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('public/assets'));
  });

// Browserify transformation
gulp.task('compile-js', function () {
    var stream = browserify({
      entries: ['./app/assets/javascripts/components.js'],
      debug: true, /* Allows sourcemaps */
      transform: [reactify]
      }
    )
    .bundle();  

    stream.pipe(source('bundle.js'))
          .pipe(gulp.dest('public/assets'));
  });
