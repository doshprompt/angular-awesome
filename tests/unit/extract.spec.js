describe('extractFilter', function() {
    beforeEach(function () {
        module('ngAwesome.filters')
    });

    it('should extract the property values from an array of objects', inject(function(extractFilter) {
        expect(extractFilter([{
            id: 1,
            name: 'hai'
        }, {
            id: 2,
            name: 'bai'
        }], 'id')).toEqual([ 1, 2 ]);
    }));
});
