/*!
 * angular-awesome :: v1.0.0 :: 2015-07-15
 * web: https://github.com/doshprompt/angular-awesome#readme
 *
 * Copyright (c) 2015 | Rahul Doshi <rahuld223@yahoo.com>
 * License: MIT
 */
;(function (angular, window, document, undefined) {
    'use strict';

angular.module('ngAwesome.filters', []);

angular.module('ngAwesome.filters')
    .filter('extract', function() {
        return function(array, property) {
            var result;

            if (!angular.isObject(array) || !angular.isString(property)) {
                return;
            }

            if (!angular.isArray(array)) {
                return [array[property]];
            }

            result = [];

            angular.forEach(array, function(object) {
                result.push(object[property]);
            });

            return result;
        };
    });

angular.module('ngAwesome', [
    'ngAwesome.filters'
]);

}(this.angular, this, this.document));
