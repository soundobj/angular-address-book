var gulp = require('gulp'),
    bower = require('main-bower-files'),
    bowerNormalize = require('gulp-bower-normalize'),
    karma = require("karma").server;


gulp.task('bower', function() {
    return gulp.src(bower(), {base: './bower_components'})
        .pipe(bowerNormalize({flatten: true}))
        .pipe(gulp.dest('./public/vendor/'));
});


gulp.task("karma", function(done) {
    console.log("configFile");
    console.log(__dirname);
    karma.start({
        configFile: __dirname + "/karma.conf.js",
        reporters: ['dots'],
        singleRun: true
    }, function() { done(); });
});

gulp.task('watch', function (){
    gulp.watch(['src/**/*.js','**/*.html','test/**/*Spec.js','karma.conf.js'],['karma']);
    gulp.watch(['bower.json'],['bower']);
});