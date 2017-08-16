const gulp = require('gulp')

gulp.task('robots', () => {
  gulp.src('src/robots.txt')
    .pipe(gulp.dest('dist'))
})
