var gulp = require('gulp');
var sass = require('gulp-sass');
//var sassGlob = require('gulp-sass-glob');
var browserSync = require('browser-sync').create();
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer'); // автоматически добавляет вендорные префиксы к CSS свойствам (req .browserslistrc)
var cssvariables = require('postcss-css-variables');
var calc = require('postcss-calc');
var sourcemaps = require('gulp-sourcemaps'); // указывает src файл js/css для инспектора браузров
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uncss = require('gulp-uncss'); // уберет неиспользуемые css классы
// minify js/css
var uglify = require('gulp-uglify-es').default; // сжатие js es6 кода
var cleanCSS = require('gulp-clean-css'); // сжатие CSS кода

// Пути
const ROOT = "main/";
const BUILD = "assets/build/"
const SRC = "assets/src/"

const PATH = {
    // готовые файлы после сборки
    build: {
        css: ROOT + BUILD + "css",
        js: ROOT + BUILD + "js",
    },
    // пути исходных файлов
    src: {
        css: ROOT + SRC + "scss/**/*.scss",
        js: ROOT + SRC + "js/**/*.js",
        html: ROOT + "*.html"
    }
}
// \ Пути

function reload(done) {
    browserSync.reload();
    done();
}

gulp.task('build:sass', function() {
    return gulp.src(PATH.src.css)
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(postcss([autoprefixer({
            cascade: false
        }), cssvariables({ preserve: true }), calc()]))
        .pipe(concat('style.css'))
        .pipe(uncss({ html: [PATH.src.html /*, ignore: [/\.nav__menu-active/] игнор классов */ ] }))
        .pipe(gulp.dest(PATH.build.css))
        .pipe(rename(function(path) {
            path.basename += ".min";
        }))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(PATH.build.css))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('build:js', function() {
    return gulp.src(PATH.src.js)
        .pipe(sourcemaps.init())
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(PATH.build.js))
        .pipe(rename(function(path) {
            path.basename += ".min";
        }))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(PATH.build.js))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task("build:all", gulp.series(['build:sass', 'build:js']));

gulp.task('browserSync', gulp.series(function(done) {
    browserSync.init({
        server: {
            baseDir: ROOT
        },
        notify: false
    })
    done();
}));

gulp.task('watch', gulp.series(['browserSync', 'build:sass', 'build:js'], function() {
    gulp.watch(PATH.src.html, gulp.series(reload));
    gulp.watch(PATH.src.css, gulp.series(['build:sass']));
    gulp.watch(PATH.src.js, gulp.series(['build:js']));
}));