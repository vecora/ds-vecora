const { series, parallel, src, dest, watch } = require("gulp");
// const imagemin = require("gulp-imagemin"); // not installed
const uglify = require("gulp-uglify");
const sass = require("gulp-sass");
const concat = require("gulp-concat");

const buildPath = "dist";

function clean (callback) {
  callback();
}


function combineScripts (callback) {
  src([
    "src/js/lib/vue-2.5.17.js",
    "src/js/lib/jquery-3.3.1.js",
    "src/js/lib/popper-1.14.3.js",
    "src/js/lib/bootstrap-4.0.0.js",
    "src/js/lib/accounting-0.4.2.js",
    "src/js/lib/prism-1.15.0.min.js",
    "src/js/vue-components/*.js",
    "src/js/*.js"
  ])
    .pipe(concat("scripts.js"))
    .pipe(uglify())
    .pipe(dest("dist/"));
  callback();
}


function compileStyles (callback) {
  src("src/styles.scss")
    .pipe(sass({outputStyle: 'compressed'}).on("error", sass.logError))
    .pipe(dest("dist"));
  callback();
}

function copyWebfonts (callback) {
  src("src/webfonts/*")
    .pipe(dest("dist/webfonts"));
  callback();
}

function copyResources (callback) {
  src([
      "!src/*.afdesign",
      "src/resources/*"
    ])
    .pipe(dest("dist/resources"));
  callback();
}

exports.watch = function() {
  watch("src/**/*.scss", { events: "all", ignoreInitial: false }, compileStyles);
  watch("src/js/**/*.js", { events: "all", ignoreInitial: false }, combineScripts);
}

exports.sass = compileStyles;
exports.scripts = combineScripts;
exports.default = series(clean, parallel(combineScripts, compileStyles, copyWebfonts, copyResources));
