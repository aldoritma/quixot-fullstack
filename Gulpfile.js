var gulp    = require('gulp');
var	nodemon = require('gulp-nodemon');

var sass = require('gulp-sass');

var browserify = require('browserify'),
	vinyl	   = require('vinyl-source-stream'),
	watchify   = require('watchify');	






// serve environment
gulp.task('server:dev', function () {
  nodemon({ 
		  script: './environment/development.js', 
		  ext: 'js', 
		  env: { 'DEBUG': 'development' } , 
		  ignore: ['./build/**'], 
		  nodeArgs: ['--debug'] 
	})
  	.on('restart', function(){
  		console.log(tae);
  	});
}) 




gulp.task('server', function(){
	nodemon({
		script: './environment/production.js',
		ext: 'js',
	})
});



gulp.task('sass', function () {
	gulp.src('./public/stylesheets/sass/**/*.scss')
        .pipe(sass({
 			includePaths: ['node_modules/anila/sass/'],
			errLogToConsole: true      	
        }))
        .pipe(gulp.dest('./public/stylesheets/'));
});