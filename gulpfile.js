const { series, parallel, src, dest, watch } = require("gulp");
// const imagemin = require("gulp-imagemin"); // not installed
const uglify = require("gulp-uglify");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const args   = require('yargs').argv;
const fs = require('fs');
const through = require('through2');



const buildPath = "dist";

var copy = false;
var copy_dest = "../craft-vecora.com/web/";

function copy (filename) {
  if (copy) {
    fs.createReadStream(buildPath + "/" + filename).pipe(fs.createWriteStream(copy_dest + filename));
    console.log("Copied " + filename);
  }
}

function clean (callback) {
  callback();
}


function combineMainScripts (callback) {
  src([
    "src/js/main/lib/vue-2.5.17.js",
    "src/js/main/lib/jquery-3.3.1.js",
    "src/js/main/lib/popper-1.14.3.js",
    "src/js/main/lib/accounting-0.4.2.js",
    "src/js/main/lib/prism-1.15.0.min.js",
    "src/js/main/lib/ScrollTrigger.min.js",
    "src/js/main/lib/scrolloverflow.js",
    "src/js/main/lib/fullpage.extensions.min.js",
    "src/js/main/vue-components/*.js",
    "src/js/main/*.js"
  ])
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(dest("dist/"))
    ; //.on("end", copy => copy("main.js"));
  callback();
  copy("main.js");
}

function combineHeadScripts (callback) {
  src([
    "src/js/head/*.js"
  ])
    .pipe(concat("head.js"))
    .pipe(uglify())
    .pipe(dest("dist/"));
  callback();
  copy("head.js");
}


function compileStyles (callback) {
  src("src/styles.scss")
    .pipe(sass({outputStyle: 'compressed'}).on("error", sass.logError))
    .pipe(dest("dist"))
    .pipe(through.obj(function (chunk, enc, cb) {
      copy("styles.css");
      cb(null, chunk);
    }));
  callback();
}

function copyWebfonts (callback) {
  src("src/webfonts/*")
    .pipe(dest("dist/webfonts"));
  callback();
}

function copyFavicons (callback) {
  src([
      "src/favicon.png",
      "src/favicon--dark.png"
    ])
    .pipe(dest("dist"));
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
  watch("src/js/**/*.js", { events: "all", ignoreInitial: false }, combineMainScripts);
  watch("src/js/**/*.js", { events: "all", ignoreInitial: false }, combineHeadScripts);
  if (args.copy) {
    copy = true;
    if (args.copy === typeof stringValue) {
      copy_dest = args.copy;
    }
  }
}

exports.sass = compileStyles;
exports.scripts = parallel(combineMainScripts, combineHeadScripts);
exports.default = series(clean, parallel(combineMainScripts, combineHeadScripts, compileStyles, copyWebfonts, copyFavicons, copyResources));
