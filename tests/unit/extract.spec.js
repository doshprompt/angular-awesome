describe('extractFilter', function() {
    beforeEach(function () {
        module('ngAwesome.filters')
    });

    it('should extract the property values from an array of objects', inject(function(extractFilter) {
        expect(extractFilter([{
            id: 1,
            name: 'hello'
        }, {
            id: 2,
            name: 'world'
        }], 'name')).toEqual([ 'hello', 'world' ]);
    }));

    it('should handle being passed a single object instead of an array', inject(function(extractFilter) {
        expect(extractFilter({
            id: 1,
            name: 'kthx'
        }, 'id')).toEqual([1]);
    }));

    it('should not return anything if the input(s) is/are invalid', inject(function(extractFilter) {
        expect(extractFilter(null, 'lol')).toEqual();
        expect(undefined, null).toEqual();
        expect(extractFilter([{
            id: 1,
            name: 'hai'
        }, {
            id: 2,
            name: 'bai'
        }])).toEqual();
    }));
});
