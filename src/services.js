angular.module('street-trees.services', [])
    .constant('dataUrl', 'data/trees_concordia.geo.json')
    .factory('trees', ['$http', 'dataUrl', function($http, dataUrl) {
        return {
            get: function() { return $http.get(dataUrl)}
        }
    }]);
