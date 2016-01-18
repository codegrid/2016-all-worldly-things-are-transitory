var gulp         = require('gulp');
var sass         = require('gulp-sass');
var rename       = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS    = require('gulp-minify-css');

var AUTOPREFIXER_BROWSERS = [
  'ie >= 9',
  'safari >= 7',
  'ios >= 7',
  'android >= 4'
];

gulp.task('sass', function() {
  gulp.src('gulp-src/styles.scss')
      .pipe(sass())
      .pipe(autoprefixer(AUTOPREFIXER_BROWSERS))
      .pipe(gulp.dest('./gulp-build/'))
      .pipe(rename({extname:'.min.css'}))
      .pipe(minifyCSS())
      .pipe(gulp.dest('./gulp-build/'))
});

gulp.task('default', ['sass']);
