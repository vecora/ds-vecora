const gulp = require("gulp");
// const imagemin = require("gulp-imagemin"); // not installed
const uglify = require("gulp-uglify");
const sass = require("gulp-sass");
const concat = require("gulp-concat");

/*
  -- TOP LEVEL FUNCTIONS --
  gulp.task - Define task
  gulp.src - Points to files to use
  gulp.dest - Points to folder to output dist files
  gulp.watch - Watches files and folders for changes
*/


gulp.task("scripts", function() {
  gulp.src("src/js/*.js")
    .pipe(concat("scripts.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/"));
});


gulp.task("sass", function() {
  gulp.src("src/styles.scss")
    .pipe(sass({outputStyle: 'compressed'}).on("error", sass.logError))
    .pipe(gulp.dest("dist"));
});


gulp.task("default", ["sass", "scripts"]);


gulp.task("watch", function() {
  gulp.watch("src/js/*.js", ["scripts"]);
  gulp.watch("src/*.scss", ["sass"]);
});
