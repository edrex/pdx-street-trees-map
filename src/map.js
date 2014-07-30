(function() {
    'use strict';
    angular.module('street-trees', []).directive('map', [
        '$q',
        function($q) {
            var _leafletMap;
            return {
                restrict: 'EA',
                replace: true,
                scope: {
                    geojson: '=geojson'
                },
                template: '<div class="map"></div>',
                controller: [
                    '$scope',
                    function($scope) {
                        _leafletMap = $q.defer();
                        this.getMap = function() {
                            return _leafletMap.promise;
                        };
                    }
                ],

                link: function(scope, element, attrs) {
                    var map = new L.Map(element[0]);
                    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                        maxZoom: 18
                    }).addTo(map);

                    _leafletMap.resolve(map);

                    var leafletGeoJSON;

                    var onEachFeature = function(feature, layer) {

                        layer.on({
                            mouseover: function(e) {
                                scope.$apply(function() {
                                    scope.geojson.selected = feature;
                                    // $rootScope.$broadcast('map.geojsonMouseover', e);
                                });
                            },
                            mouseout: function(e) {
                                leafletGeoJSON.resetStyle(e.target);
                            }
                        });
                    };


                    scope.$watch('geojson', function(geojson) {
                        if (angular.isDefined(leafletGeoJSON) && map.hasLayer(leafletGeoJSON)) {
                            map.removeLayer(leafletGeoJSON);
                        }
                        if (!(angular.isDefined(geojson) && angular.isDefined(geojson.data))) {
                            return;
                        }

                        leafletGeoJSON = L.geoJson(geojson.data, {
                            onEachFeature: onEachFeature
                        });

                        map.fitBounds(leafletGeoJSON.getBounds().pad(0.01));

                        leafletGeoJSON.addTo(map);
                    });
                }
            };
        }
    ]);
}());