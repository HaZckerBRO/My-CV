; 'use strict';

var gulp = require('gulp'),
	gp 	 = require('gulp-load-plugins')(),
	browserSync = require('browser-sync').create(),
	concatJS = require('gulp-concat'),
	uglifyJS = require('gulp-uglifyjs'),
	babel = require('gulp-babel');

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
	
});



 
gulp.task('babel', () =>
    gulp.src([
    	'src/static/js/main.js',
    	'src/static/js/skills.js'
	])
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(gulp.dest('src/static/js/ES5'))
);


gulp.task('scripts', function(){
	return gulp.src([
		'src/static/js/ES5/main.js',
		'src/static/js/ES5/skills.js'
	])
	.pipe(concatJS('main.min.js'))
	.pipe(uglifyJS())
	.pipe(gulp.dest('build/js/'));
});

gulp.task('transfer', function(){
	return gulp.src([
		'src/static/index.html',
		'src/static/img/**/*'
	])
    .pipe(gulp.dest('build/'));
});

gulp.task('sass', function(){
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
});

gulp.task('watch', function(){
	gulp.watch('src/static/sass/**/*.sass', gulp.series('sass'))
});

gulp.task('default', gulp.series(
	gulp.parallel('sass', 'babel', 'scripts', 'transfer', 'watch', 'serve'),
	'watch',
	'serve'
));
	



