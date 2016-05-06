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

gulp.task('pug', function() {
  return gulp.src("./pug/*.pug")
    .pipe(plugins.pug({pretty: true}))
    .pipe(gulp.dest("./"))
    .pipe(browserSync.stream());
});

gulp.task('watch', function() {
  browserSync.init({
    server: './'
  });

	gulp.watch(['./sass/tempora.scss', './sass/**/*.scss'], ['sass']);
	gulp.watch('./pug/*.pug', ['pug']);
  gulp.watch('./*.html').on('change', browserSync.reload);
});

gulp.task('default', ['watch']);
