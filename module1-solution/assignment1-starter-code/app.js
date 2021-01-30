(function() {
    'use strict';
    angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.message = "Please enter data first";
        $scope.checkLunch = function(str) {
            if (str.split(",").length > 3) { $scope.message = "Too much!"; }
            if (str.split(",").length > 0 && str.split(",").length < 4) { $scope.message = "Enjoy!"; }
        };
    }
})();