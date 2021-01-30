(function() {
    'use strict';
    angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.message = "";
        $scope.checkLunch = function(str) {
            if (str.split(",").length > 3) { $scope.message = "Too much!"; }
            else { $scope.message = "Enjoy!"; }
            if (str.length == 0) { $scope.message = "Please enter data first"; }
        };
    }
})();