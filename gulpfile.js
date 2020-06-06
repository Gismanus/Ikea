var gulp = require('gulp');
var webserver = require('gulp-webserver');
 
gulp.task('webserver', function() {
  gulp.src('../Ikea')
    .pipe(webserver({
      directoryListing: true,
      open: true
    }));
});