var gulp = require('gulp'),
    chalk = require('chalk'),
    jsdoc = require('gulp-jsdoc'),
    mocha = require('gulp-mocha'),
    browserify = require('browserify');

gulp.task('default', ["help"]);

gulp.task('help', function() {
    console.log("");
    console.log("    " + chalk.bold.underline("Usage:") + " gulp [TASK]");
    console.log("");
    console.log("    gulp help - Displays this text.");
    console.log("    gulp build - Build the module.");
    console.log("    gulp test - Runs unit tests.");
    console.log("    gulp doc - Builds documentation.");
    console.log("");
});

gulp.task('build', ['test'], function() {
    console.log("Built");
});

gulp.task('test', function() {
    gulp.src('test/*.js')
        .pipe(mocha());
});

gulp.task('doc', function() {
    var infos = {
        licenses: ['Gnu GPL v3'],
        plugins: ['plugins/markdown']
    };

    var template = {
        path: 'ink-docstrap',
        systemName: 'GenAlg.js',
        navType: 'vertical',
        theme: 'readable',
        linenums: true,
        collapseSymbols: false,
        inverseNav: false
    };

    gulp.src(['./src/**/*.js', 'README.md'])
        .pipe(jsdoc.parser(infos))
        .pipe(jsdoc.generator('./docs', template));
});
