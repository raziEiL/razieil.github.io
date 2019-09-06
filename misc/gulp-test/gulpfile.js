var gulp = require('gulp');
var sass = require('gulp-sass');
//var sassGlob = require('gulp-sass-glob');
var browserSync = require('browser-sync').create();
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer'); // req .browserslistrc
var cssvariables = require('postcss-css-variables');
var calc = require('postcss-calc');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
// minify js/css
var uglify = require('gulp-uglify-es').default;
var cleanCSS = require('gulp-clean-css');

// js file paths
var mainJsFloder = 'main/assets/main/js'; //folder for final min.js files
var srcJsFilesPath = 'main/assets/src/js/**/*.js'

// css file paths
var mainCssFolder = 'main/assets/main/css'; // folder for final min.css
var srcScssFilesPath = 'main/assets/src/scss/**/*.scss'; // scss files to watch

function reload(done) {
	browserSync.reload();
	done();
}

gulp.task('sass', function () {
	return gulp.src(srcScssFilesPath)
		//.pipe(sassGlob())
		.pipe(sass({
			outputStyle: 'expanded'
		}).on('error', sass.logError))
		.pipe(postcss([autoprefixer({
			cascade: false
		}), cssvariables(), calc()]))
		.pipe(gulp.dest(mainCssFolder))
		.pipe(rename(function (path) {
			path.basename += ".min";
		}))
		.pipe(cleanCSS())
		.pipe(gulp.dest(mainCssFolder))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('js', function () {
	return gulp.src(srcJsFilesPath)
		.pipe(concat('scripts.js'))
		.pipe(gulp.dest(mainJsFloder))
		.pipe(rename(function (path) {
			path.basename += ".min";
		}))
		.pipe(uglify())
		.pipe(gulp.dest(mainJsFloder))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('browserSync', gulp.series(function (done) {
	browserSync.init({
		server: {
			baseDir: 'main'
		},
		notify: false
	})
	done();
}));

gulp.task('watch', gulp.series(['browserSync', 'sass', 'js'], function () {
	gulp.watch('main/*.html', gulp.series(reload));
	gulp.watch(srcScssFilesPath, gulp.series(['sass']));
	gulp.watch(srcJsFilesPath /* [scriptsJsPath, "!" + scriptsJsFloder + "/scripts.min.js", "!" + scriptsJsFloder + "/scripts.js"] */ , gulp.series(['js']));
}));