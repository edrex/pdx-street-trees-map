# Street Trees Map

Explore the [Portland Street Trees](http://www.civicapps.org/datasets/street-trees) [data set](http://geojson.io/#id=gist:edrex/871075d36af0b45fe0e7) on a Leaflet map, with filtering.

## Guidelines

Keep tooling as simple as possible.

 - No build step
 - Use CDN to avoid vendoring dependencies for gh-pages

## Components

 - Leaflet
 - Angular
 - normalize
 - [Chosen](http://harvesthq.github.io/chosen/) with [angular-chosen](https://github.com/localytics/angular-chosen)

## Iterations

 - [x] Empty Leaflet page
 - [x] Fit map bounds to point data
 - [x] Load + display geojson points
 - [x] Display metadata for active item
     + [x] mock out UI
     + [x] live data
 - [x] Allow filtering by COMMON and HEALTH attributes
     + [x] mock out UI
     + [x] populate groups from data
     + [x] implement filter

### Nice to have

 - [ ] Custom base layer
 - [ ] Custom point icon(s?)
 - [ ] Clustering?

## Tasks

 - [x] Go back to bower deps (needed for test setup)
 - [x] vendor libs/ for gh-pages
 - [ ] add karma/jasmine unit tests
 - [ ] add protractor/jasmine e2e tests

### Refactor Wishlist

 - [ ] make geojson.data, filters, active_filters, and filteredData services (improve testability and encapsulation)
 - [ ] test filtering (this is the most complicated part of the app)
 
## Design

 - Full page map
 - On hover, display metadata for active point in an absolutely positioned metadata area over map
 - Use a single overlaid Chosen-style select element for faceted filtering ([examples](https://github.com/localytics/angular-chosen/blob/master/example/index.html), [optgroup support](https://github.com/localytics/angular-chosen/issues/47)), [with nested data](https://groups.google.com/d/msg/angular/s7vyrvWQZgg/YCtfd_aAmEMJ)
 - Nice point icon (or per-species icons)

## Retrospective

 - Messaging might be a nice way to loosely couple components without sharing state
 - angular-leaflet-directive is nice as a reference, but for more than basic maps it is enormously helpful to "own" the directive code

## References

http://css-tricks.com/snippets/css/a-guide-to-flexbox/