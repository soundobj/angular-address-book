//describe("elementForm-directives", function () {
//
//    var $compile, $rootScope, template;
//    console.log("ar ");
//    var app = angular.module('myApp1', [])
//        .directive('selectForm', [selectForm]);
//
//    beforeEach(module('myApp1'));
//    beforeEach(module('selectForm.html'));
//
//    beforeEach(inject(function($templateCache,_$compile_, _$rootScope_) {
//
//        //assign the template to the expected url called by the directive and put it in the cache
//        template = $templateCache.get('selectForm.html');
//        $templateCache.put('selectForm.html',template);
//
//        $compile = _$compile_;
//        $rootScope = _$rootScope_;
//    }));
//
//
//    fit("adds an element form", function() {
//        //debugger;
//        $rootScope.types = [
//            {"id": 0, "name":'Mobile'},
//            {"id": 1, "name":'Home'},
//            {"id": 2, "name":'Work'}
//        ];
//        console.log("enter");
//        $rootScope.model = 0;
//
//        var el = $compile('<select-form types="types" model="model"></select-form>')($rootScope);
//
//        $rootScope.$digest(); //update the html
//        console.log(angular.mock.dump(el));
//
//        expect(el.hasClass('col-md-3')).toBe(true);
//        expect(el.find.option)
//        console.log(el.find('option'));
//        var options = el.find('option');
//        expect(options.length).toBe(3);
//       // expect(el.find('option').eq(0)).toBeSelected();
//
//    })
//
//    afterEach(function() {
//        app = undefined;
//    });
//});