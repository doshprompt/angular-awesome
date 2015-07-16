angular.module('ngAwesome.filters')
    .filter('extract', function() {
        return function(array, property) {
            var result;

            if (!angular.isObject(array)) {
                return result;
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
