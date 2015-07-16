module.exports = function (config) {
    'use strict';

    config.set({
        files : [
            'bower_components/angular/angular.js',

            'bower_components/angular-mocks/angular-mocks.js',

            'src/**/*.module.js',
            'src/**/*.filter.js',

            'tests/unit/**/*.js'
        ],

        frameworks: [ 'jasmine' ],

        singleRun: true,

        browsers : [ 'PhantomJS' ],

        preprocessors: {
            'src/**/*.js': [ 'coverage' ]
        },

        reporters: [
            'progress',
            'coverage'
        ],

        coverageReporter: {
            type: 'lcov',
            dir: 'coverage',
            subdir: '.'
        }
  });
};