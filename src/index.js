angular.module("street-trees", ["street-trees.directives", 'localytics.directives'])
.controller("MainController", ["$scope", "$http", "$log", function ($scope, $http, $log, leafletData) {
    angular.extend($scope, {
    });
    $http.get("data/trees_concordia.geo.json").success(function(data, status) {
        $scope.geojson = {
            data: data,
            active: data.features[0],
            filters: [
                {value: 'C:Oak', group: 'COMMON'},
                {value: 'C:Cedar', group: 'COMMON'},
                {value: 'H:Good', group: 'HEALTH'},
                {value: 'H:Poor', group: 'HEALTH'}
            ],
            active_filters: []
        }
    });
}]);
