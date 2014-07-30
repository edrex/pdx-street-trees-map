angular.module("street-trees", ["street-trees.directives", 'localytics.directives'])
.controller("MainController", ["$scope", "$http", "$log", function ($scope, $http, $log, leafletData) {
    angular.extend($scope, {
    });
    $http.get("data/trees_concordia.geo.json").success(function(data, status) {
        var groups = ['HEALTH', 'COMMON'];
        var counts = _.map(groups, function(group) {
            return _.countBy(data.features, function(d){
                return d.properties[group]
            })
        })
        var filters = []
        for (var i = 0; i < groups.length; i++) {
            for (var v in counts[i]) {
                filters.push({
                    value: v,
                    label: v + ' (' + counts[i][v] + ')',
                    group: groups[i]
                })
            }
        }
        $scope.geojson = {
            data: data,
            filters: filters,
            active_filters: []
        }
    });
}]);
