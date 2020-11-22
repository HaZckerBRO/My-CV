; 'use strict';

var gulp = require('gulp'),
	gp 	 = require('gulp-load-plugins')(),
	browserSync = require('browser-sync').create(),
	concatJS = require('gulp-concat'),
	uglifyJS = require('gulp-uglifyjs'),
	pngquant = require('imagemin-pngquant'),
	imagemin = require('gulp-imagemin'),
	babel = require('gulp-babel'),
	del = require('del');


function clean(){
	return del(['./build'])
}

function scripts(){
	return gulp.src([
		'src/js/ES5/main.js',
	])
	.pipe(concatJS('main.min.js'))
	.pipe(uglifyJS())
	.pipe(gulp.dest('build/js/'))
	.pipe(browserSync.stream());
}

function transfer(){
	return gulp.src([
			'src/img/**/*'
		])
	    .pipe(gulp.dest('build/'));
}

function transferHTML(){
	return gulp.src([
			'src/index.html'
		])
	    .pipe(gulp.dest('build/'))
	    .pipe(browserSync.reload({
			stream: true
		}));
}


function sass() {
	return gulp.src('src/sass/main.sass')
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
	gulp.watch('src/sass/**/*.sass', gulp.series('sass'))
	gulp.watch('src/js/*.js', gulp.series('babel'))
	gulp.watch('src/js/ES5/*.js', gulp.series('scripts'))
	gulp.watch('./src/*.html', gulp.series('transferHTML'))
}

function images(done){
	gulp.src('src/img/**/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest('build/img/'))
        .pipe(browserSync.reload({
			stream: true
		}));
	done();
}

function serve(){
	browserSync.init({
		server: {
		    baseDir: "build/"
		}
	});
}

gulp.task('serve', serve);
gulp.task('del', clean);
gulp.task('babel', function(done) {
  gulp.src(
	'src/js/main.js'
	)
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(gulp.dest('src/js/ES5'));
    done();
});

gulp.task('sass', sass);
gulp.task('scripts', scripts);
gulp.task('images', images);
gulp.task('transfer', transfer);
gulp.task('transferHTML', transferHTML);
gulp.task('watch', watch);
gulp.task('build', gulp.series(clean, images, 'transferHTML', 'babel', gulp.parallel(sass, scripts)))
gulp.task('dev', gulp.series('build', gulp.parallel(watch, serve)))
	



