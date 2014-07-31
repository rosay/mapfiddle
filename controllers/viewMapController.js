app.controller("ViewMapController", ['$scope', 'mapOptionsService', 'mapFeatureService', 'mapService', function($scope, mapOptionsService, mapFeatureService, mapService) {
    // Get map options object to create the map
    var optionsObject = {};
    _.forIn(mapOptionsService.getAllModified(), function(option) {
        optionsObject[option.name] = option.value;
    });
    mapService.initMap(optionsObject);

    // Options have been changed via the sidebar, update the map!
    $scope.$on('mapOptionChange', function() {
        var option = mapOptionsService.lastUpdatedOption();
        mapService.setMapOption(option);
    });

    $scope.$on('mapFeatureChange', function() {
        var feature = mapFeatureService.lastUpdatedFeature();
        mapService.toggleMapFeature(feature);
    });

    // The map has changed, update the options via the mapOptionsService
    $scope.$on('mapMoveEnd', function() {
        var options = mapOptionsService.getAllWithStateMethod();

        _.forIn(options, function(option) {
            // Run the options' state method to get the new value.
            var newValue = mapService.getMap()[option.stateMethod]();
            mapOptionsService.set(option.name, newValue);
        });
    });
}]);