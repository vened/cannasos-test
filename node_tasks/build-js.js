var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglifyjs');
var minifyHtml = require('gulp-minify-html');
var ngTemplate = require('gulp-ng-template');
var ngAnnotate = require('gulp-ng-annotate');
var conf = require('./config');


/**
 * Сборка библиотек
 */
gulp.task('build-libs', function ()
{
	return gulp.src([
		conf.libs + '/angular/angular.js',
		conf.libs + '/angular-resource/angular-resource.js',
		conf.libs + '/angular-route/angular-route.js'
	])
		.pipe(concat('libs.js', {insertSourceName: {open: '/*', close: '*/'}}))
		.pipe(uglify({
			mangle      : false,
			outSourceMap: true
		}))
		.pipe(gulp.dest(conf.build.js));
});


/**
 * Сборка шаблонов
 */
gulp.task('build-html', function ()
{
	return gulp.src([
		conf.js + '/templates/**/*.html'
	])
		.pipe(minifyHtml({empty: true, quotes: true}))
		.pipe(ngTemplate({
			moduleName: 'app.templates',
			standalone: true,
			filePath  : 'templates.js'
		}))
		.pipe(gulp.dest(conf.build.js));
});

/**
 * Сборка приложения
 */
gulp.task('build-app', ['build-html'], function ()
{
	return gulp.src([
		conf.js + '/**/*.js',
		conf.build.js + '/templates.js'
	])
		.pipe(ngAnnotate())
		.pipe(concat('app.js'))
		//.pipe(uglify({
		//	mangle      : true,
		//	outSourceMap: true
		//}))
		.pipe(gulp.dest(conf.build.js));
});