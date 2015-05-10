selectForm = function () {

    return {
        restrict: 'E',
        replace: 'true',
        templateUrl: 'selectForm.html',
        scope: {
            types: '=',
            model: '=model'
        }
    }
}