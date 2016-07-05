var gulp = require('gulp');
//var jshint = require('gulp-jshint');
var clean = require('gulp-clean');
var concat  = require('gulp-concat');
var uglify = require('gulp-uglify');
var es = require('event-stream');
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');
var runSequence = require('run-sequence');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('clean', function () {
	return gulp.src(['dist/app/css','dist/app/view','dist/app/js'])
	.pipe(clean());
});

gulp.task('sass', function () {

	 gulp.src('src/app/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
    	browsers: ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']
	}))
    .pipe(gulp.dest('src/app/css'));

    gulp.src('src/app/css/style.css')
	.pipe(cleanCSS())
	.pipe(concat('styles.min.css'))
	.pipe(gulp.dest('src/app/css'));
});

//gulp.task('jshint',function () {
//	return gulp.src('src/app/**/*.js')
//	.pipe(jshint())
//	.pipe(jshint.reporter('default'));
//});

gulp.task('uglify', function () {

	return gulp.src('src/app/js/*.js').pipe(uglify())
	.pipe(gulp.dest('src/app/js'));
});

gulp.task('htmlmin', function () {
	return gulp.src(['src/app/*.html','*.html'])
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('src/app/view'));
});

/*gulp.task('copy', function () {
	gulp.src('index.html')
	.pipe(rename('index-2.html'))
	.pipe(gulp.dest('dist/'));
})*/

gulp.task('cssmin', function() {
    gulp.src('src/app/css/style.css')
	.pipe(cleanCSS())
	.pipe(gulp.dest('src/app/css'));

});

gulp.task('watch', function() {
  gulp.watch('src/app/scss/*.scss', ['sass']).on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
  gulp.watch('src/app/view/*.html',['htmlmin']);
  gulp.watch('src/app/**/*.js',['uglify']);
});

gulp.task('default', function (callback) {
	return runSequence('clean',['htmlmin','sass','uglify','watch'],callback);
});
