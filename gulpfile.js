var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

var sassPaths = [
  'bower_components/normalize.scss/sass',
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
];

gulp.task('sass', function() {
  return gulp.src('scss/app.scss')
    .pipe($.sass({
      includePaths: sassPaths,
      outputStyle: 'compressed' // if css compressed **file size**
    })
    .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('css'));
});

gulp.task('foundation', function() {
  return gulp.src([
    'bower_components/jquery/dist/jquery.min.js',
    'bower_components/what-input/dist/what-input.min.js',
    'bower_components/foundation-sites/dist/js/foundation.min.js'
  ])
  .pipe(gulp.dest('./js/'))
});

gulp.task('scripts', function() {
  return gulp.src('js/app.js')
    .pipe($.concat('scripts.js'))
    .pipe($.rename({suffix: '.min'}))
    .pipe($.uglify())
    .pipe(gulp.dest('./js/'))
});

gulp.task('default', function() {
  gulp.start('sass');
  gulp.start('scripts');
});

gulp.task('watch', function() {
  gulp.watch(['scss/**/*.scss'], ['sass']);
  gulp.watch(['js/app.js'], ['scripts']);
});
