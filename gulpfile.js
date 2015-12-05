// Gulpfile.js

var gulp = require("gulp"),
    sass = require('gulp-sass');
 

 //compile sass files
gulp.task('sass', function () {
  gulp.src('*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(''));
});
 

//compile sass files on the go
gulp.task('sasswatch', function () {
  gulp.watch('*.scss', ['sass']);
});