'use strict';

var gulp = require('gulp'),
  watch = require('gulp-watch'),
  bowerFiles = require('main-bower-files'),
  inject = require('gulp-inject'),
  del = require('del'),
  sass = require('gulp-sass'),
  runSequence = require('run-sequence');

var paths = {
  scripts:[
    'assets/vendor/js/**/*.js',
    'assets/app/initializer.js',
    'assets/app/app.js',
    'assets/app/route.js',
    'assets/app/*/**/*.js',
    'assets/common/**/*.js'
  ],
  styles:[
    'assets/vendor/css/**/*.css',
    'assets/css/*.scss'
  ],
  images: 'assets/images/**/*'
};

gulp.task('dev_inject', function () {
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  watch({glob: ['assets/app/**/*','assets/common/**/*','assets/css/**/*']}, function() {

    var style = gulp.src(paths.styles)
      .pipe(sass())
      .pipe(gulp.dest('./development/public/css'));

    gulp.src('./assets/index.html')
      .pipe(inject(style, {addRootSlash: false ,addPrefix:'..'}))
      .pipe(inject(gulp.src(paths.scripts, {read: false}), {addRootSlash: false ,addPrefix:'..'}))
      .pipe(inject(gulp.src(bowerFiles(), {read: false}), {name: 'bower',addRootSlash: false ,addPrefix:'..'}))
      .pipe(gulp.dest('./development'));
  });
});

// Copy all static images
gulp.task('dev_images', function() {
  watch({glob: paths.images}, function(files) {
    return files.pipe(gulp.dest('./development/public/images'));
  });
});

gulp.task('dev_clean', function (cb) {
  del(['development'], cb);
  console.log('Files deleted');
});

//developmnet
gulp.task('default',function(callback) {
  runSequence('dev_clean','dev_inject','dev_images',callback);
});
