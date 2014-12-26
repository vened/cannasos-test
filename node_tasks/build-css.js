var gulp = require('gulp');
var less = require('gulp-less');

var LessPluginCleanCSS = require("less-plugin-clean-css"),
	cleancss = new LessPluginCleanCSS({advanced: true});

var LessPluginAutoPrefix = require('less-plugin-autoprefix'),
	autoprefix = new LessPluginAutoPrefix({browsers: ["last 4 versions"]});

var sourcemaps = require('gulp-sourcemaps');
var conf = require('./config');


gulp.task('build-css', function ()
{
	return gulp.src(conf.css)
		.pipe(less({
			plugins: [
				autoprefix,
				cleancss
			]
		}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(conf.build.css));
});