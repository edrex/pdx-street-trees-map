angular.module('street-trees.services', [])
    .constant('dataUrl', 'data/trees_concordia.geo.json')
    .constant('filterGroups', ['HEALTH', 'COMMON'])

    // returns a promise
    .factory('trees', ['$http', 'dataUrl', function($http, dataUrl) {
        return $http.get(dataUrl)
    }])
    .factory('treeFilters', ['trees', 'filterGroups', function(trees, filterGroups) {
        return trees.then(function(result) {
            var counts = _.map(filterGroups, function(group) {
                return _.countBy(result.data.features, function(d){
                    return d.properties[group]
                })
            })
            var filters = []
            for (var i = 0; i < filterGroups.length; i++) {
                for (var v in counts[i]) {
                    filters.push({
                        value: v,
                        label: v + ' (' + counts[i][v] + ')',
                        group: filterGroups[i]
                    })
                }
            }
            return filters;

        })
    }])
