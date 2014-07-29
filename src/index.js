angular.module("street-trees", ["leaflet-directive"])
.controller("MainController", ["$scope", "$http", "$log", "leafletData", function ($scope, $http, $log, leafletData) {
    angular.extend($scope, {
    });
    $http.get("data/trees_concordia.geo.json").success(function(data, status) {
        angular.extend($scope, {
            geojson: {
                data: data
            }
        });
        leafletData.getMap().then(function(map) {
            map.fitBounds(L.geoJson(data).getBounds().pad(0.01));
        });
    });
}]);
