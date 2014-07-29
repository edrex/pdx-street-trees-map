# Street Trees Map

Explore the [Portland Street Trees](http://www.civicapps.org/datasets/street-trees) [data set](http://geojson.io/#id=gist:edrex/871075d36af0b45fe0e7) on a Leaflet map, with filtering.

## Guidelines

Keep tooling as simple as possible.

 - No build step
 - Use CDN to avoid vendoring dependencies for gh_pages

## Iterations

 - [x] Empty Leaflet page
 - [ ] Fit map bounds to point data
 - [ ] Load + display geojson points
 - [ ] Basic metadata display
 - [ ] Allow filtering by COMMON and HEALTH attributes

### Nice to have

 - [ ] Clustering
 - [ ] Custom base layer
 - [ ] Custom point icon(s?)
 
## Components

 - Leaflet
 - Angular
 - normalize

### Likely

 - https://github.com/localytics/angular-chosen
 - ~~angular-leaflet-directive~~


## Design

 - Full page map
 - Display selected point metadata
 - Nice point icon (or per-species icons)

## References

http://zevross.com/blog/2014/05/27/synchronize-leaflet-map-data-with-angularjs/