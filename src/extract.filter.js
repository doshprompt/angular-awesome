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
