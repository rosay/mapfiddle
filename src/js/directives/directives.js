(function() {
    "use strict";

    app.directive('optionRange', function () {
        return {
            scope: {
                item: '=optionRange'
            },
            restrict: 'AEC',
            templateUrl: 'templates/option-range.html'
        };
    });

    app.directive('optionCheckbox', function () {
        return {
            scope: {
                item: '=optionCheckbox'
            },
            restrict: 'AEC',
            templateUrl: 'templates/option-checkbox.html'
        };
    });

    app.directive('prettyprintd', function() {
        return {
            restrict: 'C',
            link: function postLink(scope, element) {
                scope.$watch('markup', function () {
                    element.html(prettyPrintOne(scope.markup));
                });
            }
        };
    });

    app.directive('optionsPanel', function () {
        return {
            restrict: 'E',
            controller: 'MapOptionsController',
            templateUrl: 'templates/options.html'
        };
    });
    app.directive('featuresPanel', function () {
        return {
            restrict: 'E',
            controller: 'MapFeaturesController',
            templateUrl: 'templates/features.html'
        };
    });
    app.directive('eventsPanel', function () {
        return {
            restrict: 'E',
            controller: 'MapEventsController',
            templateUrl: 'templates/events.html'
        };
    });
    app.directive('aboutPanel', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/about.html'
        };
    });

    app.directive('docBox', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/doc-box.html'
        };
    });
    app.directive('selectMap', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/select-map.html'
        };
    });
}());