var DIST_DIR = 'dist',
    SRC_GLOB = 'src/**/',

    path = require('path'),

    date = require('moment'),
    del = require('del'),
    Karma = require('karma').Server,

    runSequence = require('run-sequence'),

    gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    
    banner = [
        '/*!',
        ' * <%= package.title || package.name %> :: v<%= package.version %> :: <%= package.todayDate  %>',
        ' * web: <%= package.homepage %>',
        ' *',
        ' * Copyright (c) <%= package.todayYear %> | <%= package.author %>',
        ' * License: <%= package.license %>',
        ' */',
        ''
        ].join('\n'),

    pkg = require('./package.json');

pkg.todayDate = date().format('YYYY-MM-DD');
pkg.todayYear = date().format('YYYY');

gulp.task('clean', function(done) {
    del(DIST_DIR, done);
});

gulp.task('scripts', function() {
    var filename = pkg.name + '.js';

    return gulp.src(path.join(SRC_GLOB, '*.js'))
        .pipe($.newer(path.join(DIST_DIR, filename)))
        .pipe($.angularFilesort())
        .pipe($.addSrc.prepend('module.prefix'))
        .pipe($.addSrc.append('module.suffix'))
        .pipe($.concat(filename))
        .pipe($.header(banner, {
            package: pkg
        }))
        .pipe(gulp.dest(DIST_DIR))
        .pipe($.ngAnnotate({
            add: true,
            remove: true,
            single_quotes: true
        }))
        .pipe($.sourcemaps.init())
        .pipe($.uglify({
            preserveComments: 'some'
        }))
        .pipe($.rename({
            suffix: '.min'
        }))
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest(DIST_DIR));
});

gulp.task('styles', function() {
    var filename = pkg.name + '.css';

    return gulp.src(path.join(SRC_GLOB, '*.less'))
        .pipe($.newer(path.join(DIST_DIR, filename)))
        .pipe($.sourcemaps.init())
        .pipe($.less())
        .pipe($.concat(filename))
        .pipe($.header(banner, {
            package: pkg
        }))
        .pipe(gulp.dest(DIST_DIR))
        .pipe($.rename({
            suffix: '.min'
        }))
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest(DIST_DIR));
});

gulp.task('default', function(done) {
    runSequence(['scripts', 'styles'], done)
});

gulp.task('test', ['lint'], function(done) {
    var karma = new Karma({
        configFile: path.join(__dirname, 'karma.conf.js')
    }, done)
    karma.start();
});

gulp.task('lint', function() {
    return gulp.src(path.join(SRC_GLOB, '*.js'))
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'))
        .pipe($.jshint.reporter('fail'));
});
