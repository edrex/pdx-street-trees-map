# Street Trees Map

Explore the [Portland Street Trees](http://www.civicapps.org/datasets/street-trees) [data set](http://geojson.io/#id=gist:edrex/871075d36af0b45fe0e7) on a Leaflet map, with filtering.

## Guidelines

Keep tooling as simple as possible.

 - No build step
 - Use CDN to avoid vendoring dependencies for gh-pages

## Iterations

 - [x] Empty Leaflet page
 - [x] Fit map bounds to point data
 - [x] Load + display geojson points
 - [ ] On hover, item metadata is added to scope
 - [ ] Metadata is displayed
 - [ ] Allow filtering by COMMON and HEALTH attributes

## Tasks

 - [x] Go back to bower deps (needed for test setup)
 - [x] vendor libs/ for gh-pages
 - [ ] add karma/jasmine unit tests
 - [ ] add protractor/jasmine e2e tests

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
 - On hover, display metadata for active point in an absolutely positioned metadata area over map (pointer-events: none; opacity: 0.6)
 - Use a single overlaid Chosen-style element for faceted filtering ([examples](https://github.com/localytics/angular-chosen/blob/master/example/index.html), [optgroup support](https://github.com/localytics/angular-chosen/issues/47)), [with nested data](https://groups.google.com/d/msg/angular/s7vyrvWQZgg/YCtfd_aAmEMJ)
 - Nice point icon (or per-species icons)


## References

http://css-tricks.com/snippets/css/a-guide-to-flexbox/