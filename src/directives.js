(function() {
    'use strict';
    angular.module('street-trees.directives', []).directive('map', [
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
                                    scope.geojson.active = feature;
                                });

                            },
                        });
                    };

                    var updateGeoJSON = function() {
                        console.log('foo')
                        if (!(angular.isDefined(scope.geojson) && angular.isDefined(scope.geojson.data))) {
                            return;
                        }
                        if (angular.isDefined(leafletGeoJSON) && map.hasLayer(leafletGeoJSON)) {
                            console.log('boom')
                            map.removeLayer(leafletGeoJSON);
                        }

                        scope.geojson.filteredData = _.clone(scope.geojson.data);
                        var groups = _.groupBy(scope.geojson.active_filters, 'group');
                        scope.geojson.filteredData.features = _.filter(scope.geojson.data.features, function(d) {
                            for (var g in groups) {
                                if (! (_.some(groups[g], function(filter) {
                                    return d.properties[g] === filter.value;
                                }))) {
                                    return false;
                                }
                            }
                            return true;
                        })

                        leafletGeoJSON = L.geoJson(scope.geojson.filteredData, {
                            onEachFeature: onEachFeature,
                            resetStyleOnMouseout: true
                        });

                        map.fitBounds(leafletGeoJSON.getBounds().pad(0.01));

                        leafletGeoJSON.addTo(map);
                    }

                    scope.$watch('geojson.data', function(data){
                        if (!(angular.isDefined(data))) {
                            return;
                        }
                        updateGeoJSON();
                    });
                    scope.$watch('geojson.active_filters', function(active_filters){
                        if (!(angular.isDefined(active_filters))) {
                            return;
                        }

                        updateGeoJSON();
                    });

                }
            };
        }
    ]);
}());