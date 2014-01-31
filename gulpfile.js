var gulp = require("gulp");
var clean = require("gulp-clean");
var wrap = require("gulp-wrap");
var template = require("gulp-template");
var rename = require("gulp-rename");
var glob = require("glob");

/**
 * Cleans the demo directory
 */
gulp.task("clean-demo", function(){
    return gulp.src("demo", { read: false })
        .pipe(clean());
});

/**
 * Cleans the lang/js directory
 */
gulp.task("clean-js", function(){
    return gulp.src("lang/js", { read: false })
        .pipe(clean());
});

/**
 * Generates a demo file for each locale, using the template.
 */
gulp.task('build-demo', ["clean-demo"], function(){
    // Get the locales by using glob to get the filenames
    glob("lang/json/*.json", function(error, files){
        var locales = files.map(function(file){
            return file.replace('lang/json/kendo-', '').replace('.json', '');
        });

        locales.forEach(function(locale){
            gulp.src("templates/kendo-global-demo.html.template")
                .pipe(template({
                    locale: locale
                }))
                .pipe(rename(function(dir, base, ext){
                    return 'kendo-' + locale + '.html';
                }))
                .pipe(gulp.dest("demo"));
        });
    });
});

/**
 * Generates a Javascript file for each locale, using the .json locale files with a template.
 */
gulp.task("build-js", ["clean-js"], function(){
    gulp.src("lang/json/*.json")
        .pipe(wrap({ src: "templates/kendo-global.js.template"}))
        .pipe(rename({
            ext: '.js'
        }))
        .pipe(gulp.dest("lang/js"));
});

/**
 * ToDo: write tests and run them from here.
 */
gulp.task("test", function(){});

/**
 * Builds everything
 */
gulp.task("build", ["build-js", "build-demo"]);

/**
 * Builds everything and runs the tests
 */
gulp.task("default", ["build", "test"]);