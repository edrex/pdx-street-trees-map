Tue morning: almost immediately bumped up against the limitations of angular-leaflet-directive. no clear way to fit map bounds to marker layer geometry, other than manually iterating over features. Leaflet example: https://www.mapbox.com/mapbox.js/example/v1.0.0/fit-map-to-markers/

Make my own simple directive which
 - displays a map
 - takes a geojson attribute and renders points
 - fits to point data
 - has filter attributes in scope as well