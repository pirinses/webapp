/// <binding AfterBuild='default' />
var gulp = require("gulp");
var uglify = require('gulp-uglify');
var concat = require("gulp-concat");


// minify javascript
function minify() {
    return gulp.src(["wwwroot/javascript/**/*.js"])
        .pipe(uglify())
        .pipe(concat("webapp.min.js"))
        .pipe(gulp.dest("wwwroot/dist/"));
}

//minify css
function styles() {
    return gulp.src(["wwwroot/css/**/*.css"])
        .pipe(uglify())
        .pipe(concat("webapp.min.css"))
        .pipe(gulp.dest("wwwroot/dist/"));
}

exports.minify = minify;
exports.styles = styles;

exports.default = gulp.parallel(minify, styles);