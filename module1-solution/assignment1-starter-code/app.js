(function() {
    'use strict';
    angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.message = "";
        $scope.checkLunch = function(str) {
            if (str.split(",").length > 3) { $scope.message = "Too much!"; }
            else if (str.split(",").length < 4 && str.split(",").length > 0) { $scope.message = "Enjoy!"; }
            else { $scope.message = "Please enter data first"; }
        };
    }
})();