angular.module("street-trees")
.controller("MainController", ["$scope", "$http", "$log", function ($scope, $http, $log, leafletData) {
    angular.extend($scope, {
    });
    $http.get("data/trees_concordia.geo.json").success(function(data, status) {
        $scope.geojson = {
            data: data
        }
    });
}]);
