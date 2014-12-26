var gulp = require('gulp');
var conf = require('./config');


gulp.task('watch', function ()
{

	gulp.watch([
		conf.js + '/**/*.js',
		conf.js + '/templates/**/*.html'
	], ['build-app']);

	gulp.watch([
		conf.less + '/*.less'
	], ['build-css']);

});