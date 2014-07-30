angular.module("street-trees", ["street-trees.directives", "street-trees.services", "localytics.directives"])
    .controller("MainController", ["$scope", "$log", "trees", "treeFilters", function ($scope, $log, trees, treeFilters) {
        angular.extend($scope, {
            geojson: {
                active_filters: []
            }
        });
        trees.then(function(result) {
            angular.extend($scope.geojson, {
                data: result.data,
            })
        });
        treeFilters.then(function(result) {
            angular.extend($scope.geojson, {
                filters: result,
            })
        });
    }]);
