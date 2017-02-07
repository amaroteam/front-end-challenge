/// <binding BeforeBuild='default' ProjectOpened='bower-restore' />
// include plug-ins
var gulp = require("gulp");
var bower = require("gulp-bower");
var cleanCss = require('gulp-clean-css');
var rename = require("gulp-rename");

var config = {
    css: [
        "css/bootstrap-grid.css"
    ],
    cssOut: "dist"
};

gulp.task("css", function () {
    return gulp.src(config.css)
                .pipe(cleanCss())
                .pipe(rename("bootstrap-grid.min.css"))
                .pipe(gulp.dest(config.cssOut));
});

//Restore all bower packages
gulp.task("bower-restore", function () {
    return bower();
});

//Set default tasks
gulp.task("default", ["css"], function () { });