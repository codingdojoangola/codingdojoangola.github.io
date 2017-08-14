var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var imagemin = require('gulp-imagemin');

//style paths
var ficheirosSass = 'src/sass/**/*.scss',
    destino = 'assets/css/';

// Start a development webserver.
gulp.task('webserver', function() {
	connect.server({
		livereload: true,
		root: '.'
	});
});

gulp.task('styles', function(){
    gulp.src(ficheirosSass)
    	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest(destino))
        .pipe(connect.reload());
});

gulp.task('imagemin', function() {
	gulp.src('src/img/**/*{.png,.jpg,.jpeg,.gif,.svg}')
	.pipe(imagemin({
		interlaced: true,
		progressive: true,
		optimizationLevel: 5
	}))
	.pipe(gulp.dest('assets/img/'))
});

gulp.task('watch',function() {
	gulp.watch(ficheirosSass,['styles'])
	gulp.watch('src/img/**', ['imagemin'])
    connect.reload();
});

gulp.task('default', ['styles', 'imagemin', 'webserver', 'watch']);
