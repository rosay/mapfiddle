app.controller('MapOptionsController', ['$scope', 'mapOptionsService', function($scope, mapOptionsService) {
    "use strict";

    $scope.initOptions = function () {
        $scope.options = mapOptionsService.getUserConfigurable();
    };

    // Option templates fire this function on click to raise event 'mapOptionChange'
    $scope.changeHandler = function (option) {
        mapOptionsService.broadcastChangedOption(option.name);
    };

    // Init the sidebar
    $scope.initOptions();
}]);