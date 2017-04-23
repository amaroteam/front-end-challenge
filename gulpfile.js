var gulp 	  = require('gulp'),
	uglify	  = require('gulp-uglify'),
	sass	  = require('gulp-sass'),
	minifycss = require('gulp-clean-css'),
	rename    = require('gulp-rename'),
	prefix    = require('autoprefixer'),
	postcss   = require('gulp-postcss'),
	reload    = require('gulp-livereload');

gulp.task('formatarCss',function(){
	return gulp.src('src//estilo/main.scss')
			   .pipe(sass())
			   .pipe(minifycss())
			   .pipe(postcss([prefix({
                    browsers: [
                         '> 0%'
                    ]})]))
			   .pipe(rename('estiloBase.css'))
			   .pipe(gulp.dest('build/css'))
			   .pipe(reload());
});

gulp.task('formatarJs',function(){
	return gulp.src('src/script/script.js')
			   .pipe(uglify())
			   .pipe(gulp.dest('build/js/'))
			   .pipe(reload());
});

gulp.task('mudancaPagina',function(){
	return gulp.src('build/**/*html')
		 	   .pipe(reload());
});

gulp.task('watch',function(){
	reload.listen();
	gulp.watch('src/**/*css',['formatarCss']);
	gulp.watch('src/**/*js',['formatarJs']);
	gulp.watch('build/**/*html',['mudancaPagina']);
});

