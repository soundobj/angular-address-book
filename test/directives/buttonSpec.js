//describe("button-directives", function () {
//    var $compile, $rootScope;
//
//    var app = angular.module('myApp', [])
//        .directive('button', [button]);
//
//    beforeEach(module('myApp'));
//
//    beforeEach(inject(function(_$compile_, _$rootScope_) {
//        $compile = _$compile_;
//        $rootScope = _$rootScope_;
//    }));
//
//
//    it("adds a 'btn' class to the button element", function() {
//        var el = $compile('<button></button>')($rootScope);
//        expect(el.hasClass('btn')).toBe(true);
//    })
//
//    afterEach(function() {
//        app = undefined;
//    });
//});