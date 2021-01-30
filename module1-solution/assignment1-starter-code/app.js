(function() {
    'use strict';
    angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.message = "";
        $scope.checkLunch = function(str) {
            if (str.split(",").filter(a => a).length > 3) { $scope.message = "Too much!"; }
            else if (str.split(",").filter(a => a).length < 4) { $scope.message = "Enjoy!"; }
            else { $scope.message = "Please enter data first"; }
        };
    }
})();