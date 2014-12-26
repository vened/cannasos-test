var gulp = require('gulp');
var runSequence = require('run-sequence');
var tasks = require('require-dir')('./node_tasks');
var conf = require('./node_tasks/config');


gulp.task('default', function ()
	{
		runSequence(
			'bower-install',
			'build-css',
			'build-libs',
			'build-app',
			'watch'
		);
	}
);