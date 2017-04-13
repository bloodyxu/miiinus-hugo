var gulp = require('gulp');
var useref = require('gulp-useref');
var gulpIf = require('gulp-if');
var minifyCSS = require('gulp-minify-css');


// 定义文件路径
var devHtml = ''

// gulp.task('useref', function () {
// 	return gulp.src('public/*.html')
// 		.pipe(useref())
// 		.pipe(gulp.dest('public/dist'));
// });

gulp.task('useref', function () {
	return gulp.src('public/*.html')
		// Minifies only if it's a CSS file
		.pipe(gulpIf('public/css/*.css', minifyCSS()))
		.pipe(useref())
		.pipe(gulp.dest('public/dist'));
});
