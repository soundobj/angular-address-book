var RootCtrl = (function () {
    function RootCtrl() {
        this.brand = "Rechannel";
        this.navStates = [
            { state: "root.retailers", title: "Retailers" },
            { state: "root.orders", title: "Orders" }
        ];
    }
    return RootCtrl;
})();

//'blog-html', , 'markdown'
angular.module("Rechannel", ["ui.router"]).controller("RootCtrl", RootCtrl).config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
    $stateProvider.state({
        name: "root",
        url: "/",
        controller: "RootCtrl",
        controllerAs: "rootCtrl",
        templateUrl: "root.html"
    });
    $urlRouterProvider.otherwise("/");
    //$httpProvider.interceptors.push(authenticationInterceptor);
}).run(function ($state, $rootScope) {
    $rootScope.$state = $state;
});