; 'use strict';

var gulp = require('gulp'),
	gp 	 = require('gulp-load-plugins')(),
	browserSync = require('browser-sync').create(),
	concatJS = require('gulp-concat'),
	uglifyJS = require('gulp-uglifyjs'),
	babel = require('gulp-babel'),
	del = require('del');


function clean(){
	return del(['./build'])
}

function scripts(){
	return gulp.src([
		'src/static/js/ES5/main.js',
		'src/static/js/ES5/skills.js'
	])
	.pipe(concatJS('main.min.js'))
	.pipe(uglifyJS())
	.pipe(gulp.dest('build/js/'))
	.pipe(browserSync.stream());
}

function transfer(){
	return gulp.src([
			'src/static/img/**/*'
		])
	    .pipe(gulp.dest('build/'));
}

function sass() {
	return gulp.src('src/static/sass/main.sass')
		.pipe(gp.sass({}))
		.pipe(gp.autoprefixer({
			browsers: ['last 10 versions']
		}))
		.on('error', gp.notify.onError({
			message: "Error: <%= error.message %>",
			title: "style"
		}))
		.pipe(gp.csso())
		.pipe(gulp.dest('build/css/'))
		.pipe(browserSync.reload({
			stream: true
		}))
}

function watch(){
	gulp.watch('src/static/sass/**/*.sass', gulp.series('sass'))
	gulp.watch('src/static/js/*.js', gulp.series('babel'))
	gulp.watch('src/static/js/ES5/*.js', gulp.series('scripts'))
	gulp.watch('./*.html').on('change', browserSync.reload)
}

function serve(){
	browserSync.init({
		server: {
		    baseDir: "./"
		}
	});
}

gulp.task('serve', serve);
gulp.task('del', clean);
gulp.task('babel', function(done) {
  gulp.src([
	'src/static/js/main.js',
	'src/static/js/skills.js'
	])
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(gulp.dest('src/static/js/ES5'));
  done();
});

gulp.task('sass', sass);
gulp.task('scripts', scripts);
gulp.task('transfer', transfer);
gulp.task('watch', watch);
gulp.task('build', gulp.series(clean, transfer, 'babel', gulp.parallel(sass, scripts)))
gulp.task('dev', gulp.series('build', gulp.parallel(watch, serve)))
	



