var gulp = require('gulp');
var del = require('del');
var exec = require('child_process').exec;

gulp.task('clean', function () {
    return del(['dist']);   
});


gulp.task('build',['clean'] , function (cb) {
    return exec('ng build', function (err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
      cb(err);
    });
})

gulp.task('copy',  ['build'], function () {
      return gulp.src("./dist/*")
      .pipe(gulp.dest('../wwwroot'));
});



  gulp.task('default', ['copy'], function () { });