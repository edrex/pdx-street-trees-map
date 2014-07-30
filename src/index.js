angular.module("street-trees", ["street-trees.directives", 'localytics.directives'])
.controller("MainController", ["$scope", "$http", "$log", function ($scope, $http, $log, leafletData) {
    angular.extend($scope, {
    });
    $http.get("data/trees_concordia.geo.json").success(function(data, status) {
        $scope.geojson = {
            data: data,
            filters: [
                {value: 'Oak', group: 'COMMON'},
                {value: 'Cedar', group: 'COMMON'},
                {value: 'Good', group: 'HEALTH'},
                {value: 'Poor', group: 'HEALTH'}
            ],
            active_filters: []
        }
    });
}]);
