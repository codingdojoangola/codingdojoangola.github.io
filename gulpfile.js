var gulp = require('gulp');
var sass = require('gulp-sass');

//style paths
var ficheirosSass = 'src/sass/**/*.scss',
    destino = 'assets/css/';

gulp.task('styles', function(){
    gulp.src(ficheirosSass)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(destino));
});

gulp.task('watch',function() {
    gulp.watch(ficheirosSass,['styles']);
});