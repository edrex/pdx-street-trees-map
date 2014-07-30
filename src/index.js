angular.module("street-trees", ["street-trees.directives", "street-trees.services", "localytics.directives"])
    .controller("MainController", ["$scope", "$log", "trees", function ($scope, $log, trees) {
        angular.extend($scope, {
            geojson: {
                active_filters: []
            }
        });
        trees.get().success(function(data, status) {
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
            angular.extend($scope.geojson, {
                data: data,
                filters: filters
            })
        });
    }]);
