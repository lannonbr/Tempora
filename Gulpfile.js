var gulp = require('gulp'),
  plugins = require('gulp-load-plugins')(),
  browserSync = require('browser-sync').create();

gulp.task('sass', function() {
  return gulp.src("./sass/tempora.scss")
    .pipe(plugins.sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream());
});

gulp.task('min-css', function() {
  return gulp.src("./css/tempora.css")
    .pipe(plugins.cleanCss())
    .pipe(plugins.rename("tempora.min.css"))
    .pipe(gulp.dest("./css"));
});

gulp.task('jade', function() {
  return gulp.src("./jade/*.jade")
    .pipe(plugins.jade({pretty: true}))
    .pipe(gulp.dest("./"))
    .pipe(browserSync.stream());
});

gulp.task('watch', function() {
  browserSync.init({
    server: './'
  });

	gulp.watch(['./sass/main.scss', './sass/**/*.scss'], ['sass']);
	gulp.watch('./jade/*.jade', ['jade']);
  gulp.watch('./*.html').on('change', browserSync.reload);
});

gulp.task('default', ['watch']);
