var gulp = require('gulp'),
    less = require('gulp-less'),
    path = require('path'),
    autoprefix  = require('gulp-autoprefixer'),
	LessPluginFunctions = require('less-plugin-functions');

var functions = new LessPluginFunctions();

gulp.task('default', function(){
	gulp.watch('src/*.less', function(){
		gulp.src('src/*.less')
		.pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')],
			plugins: [functions]
        }))
		.pipe(autoprefix())
		.pipe(gulp.dest('dist/css/'));
		console.log('change');
	});
});
