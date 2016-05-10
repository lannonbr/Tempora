var gulp = require('gulp'),
  plugins = require('gulp-load-plugins')();

gulp.task('sass', function() {
  return gulp.src("./sass/tempora.scss")
    .pipe(plugins.sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest("./css"));
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
    .pipe(gulp.dest("./"));
});

gulp.task('watch', function() {
	gulp.watch(['./sass/tempora.scss', './sass/**/*.scss'], ['sass']);
	gulp.watch('./pug/*.pug', ['pug']);
});

gulp.task('default', ['watch']);
