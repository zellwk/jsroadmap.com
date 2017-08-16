const gulp = require('gulp')
const rsync = require('gulp-rsync')

gulp.task('sync', () => {
  return gulp.src('dist/**')
    .pipe(rsync({
      root: 'dist',
      hostname: 'do', // Note: requires my gitconfig
      destination: '/var/www/jsroadmap.com/',
      clean: true,
      recursive: true
    }))
})