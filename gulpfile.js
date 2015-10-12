var gulp = require('gulp'),
	wiredep = require('wiredep').stream,
	browserSync = require('browser-sync').create(),
	reload      = browserSync.reload,
  useref = require("gulp-useref"),
  uglify = require("gulp-uglify"),
  minifyCss = require("gulp-minify-css"),
  gulpif = require("gulp-if"),
  del = require("del"),
  filter = require("gulp-filter"),
  imagemin = require("gulp-imagemin"),
  size = require("gulp-size"),
  ftp = require("vinyl-ftp"),
  gutil = require("gulp-util"),
  RS_CONF = require('./rs-conf.js'),
  concatCss = require("gulp-concat-css");

/*******************************************
 * APP
 ******************************************/

//включаем bower файлы 
gulp.task('bower', function () {
  gulp.src(RS_CONF.path.htmlDir)
    .pipe(wiredep({
      derictory: RS_CONF.psth.baseDir+"/bower_components",
      overrides: {
        "qtip2": {
          "main": ["./jquery.qtip.min.js", "./jquery.qtip.min.css"],
          "dependencies": {"jquery": ">=1.6.0"}
        }
        , exclude: ["bower/qtip2/"]
        , ignorePath: /^(\.\.\/)*\.\./
    }
    }))
    .pipe(gulp.dest(RS_CONF.path.baseDir));
});

gulp.task('watch', function (){
	gulp.watch('bower.json',['bower']);
})


gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: RS_CONF.path.baseDir

        }
    });
});

gulp.task('default', ['watch','browser-sync']);
gulp.watch(RS_CONF.path.htmlDir).on("change", browserSync.reload);
gulp.watch(RS_CONF.path.cssDir).on("change", browserSync.reload);
gulp.watch(RS_CONF.path.jsDir).on("change", browserSync.reload);


/*******************************************
 * DIST
 ******************************************/
// Переносим CSS JS HTML в папку DIST
gulp.task("useref", function () {
    var assets = useref.assets();
    return gulp.src(RS_CONF.path.htmlDir)
        .pipe(assets)
        .pipe(gulpif("*.js", uglify()))
        .pipe(gulpif("*.css", minifyCss({compatibility: "ie8"})))
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(gulp.dest("dist"));
});

// Очищаем директорию DIST
gulp.task("clean-dist", function () {
    return del(RS_CONF.path.distDelDir);
});


// Запускаем локальный сервер для DIST
gulp.task("dist-server", function () {
    browserSync.init({
        notify: false,
        port: 2000,
        server: { baseDir: RS_CONF.path.distDir }
    });
});

// Перенос шрифтов
gulp.task("fonts", function() {
    gulp.src(RS_CONF.path.baseDir + "/css/*")
        .pipe(filter(["*.eot","*.svg","*.ttf","*.woff","*.woff2"]))
        .pipe(gulp.dest(RS_CONF.path.distDir+"/css/"))
});

// Перенос картинок
gulp.task("images", function () {
    return gulp.src(RS_CONF.path.baseDir+"/css/image/**/*")
            .pipe(imagemin({
                progressive: true,
                interlaced: true
            }))
            .pipe(gulp.dest(RS_CONF.path.distDir+"/css/image"));
});

// Перенос остальных файлов (favicon и т.д.)
gulp.task("extras", function () {
    return gulp.src([RS_CONF.path.baseDir+"/*.*", "!"+RS_CONF.path.htmlDir])
            .pipe(gulp.dest(RS_CONF.path.distDir));
});

// Вывод размера папки APP
gulp.task("size-app", function () {
    return gulp.src(RS_CONF.path.baseDir+"/**/*").pipe(size({title: "APP size: "}));
});

// Сборка и вывод размера папки DIST
gulp.task("dist", ["useref", "images", "fonts", "extras", "size-app", "dist-server"], function () {
    return gulp.src(RS_CONF.path.distDir+"/**/*").pipe(size({title: "DIST size: "}));
});

// Собираем папку DIST - только когда файлы готовы
gulp.task("build", ["clean-dist", "bower"], function () {
    gulp.start("dist");
});


