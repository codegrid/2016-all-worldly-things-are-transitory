'use strict';

var gulp     = require( 'gulp' );
var rubysass = require( 'gulp-ruby-sass' );
var libsass  = require( 'gulp-sass' );
var less     = require( 'gulp-less' );
var path     = require( 'path' );
var stylus   = require( 'gulp-stylus' );
 
gulp.task( 'rubysass', function () {
  return rubysass( 'src/rubysass.scss' )
    .on( 'error', rubysass.logError )
    .pipe( gulp.dest( './build') );
} );

gulp.task( 'libsass', function () {
  return gulp.src( './src/libsass.scss' )
    .pipe( libsass()
          .on( 'error', libsass.logError ) )
    .pipe( gulp.dest( './build') );
} );

gulp.task( 'less', function () {
  return gulp.src( './src/less.less' )
    .pipe( less( {
      paths: [ path.join( __dirname, 'less', 'includes' ) ]
    } ) )
    .pipe( gulp.dest( './build') );
} );

gulp.task( 'stylus', function () {
  return gulp.src( './src/stylus.styl' )
    .pipe( stylus() )
    .pipe( gulp.dest( './build') );
} );
