# Street Trees Map

Explore the [Portland Street Trees](http://www.civicapps.org/datasets/street-trees) [data set](http://geojson.io/#id=gist:edrex/871075d36af0b45fe0e7) on a Leaflet map, with filtering.

## Guidelines

Keep tooling as simple as possible.

 - No build step
 - Have to use Bower since angular-leaflet-directive isn't in a CDN

## Iterations

 - Empty Leaflet page
 - Load + display geojson points
 - Basic metadata display
 - Allow filtering by attributes
 - Better metadata display
 - ...

## Components

 - Leaflet
 - Angular

### Likely

 - normalize
 - angular-leaflet-directive
 - https://github.com/localytics/angular-chosen

## Tests

## Stories

As a user, I want to be able to filter displayed points by arbitrary metadata attributes so that I can find points of interest in a large data set.


## Design

Full page map
Nice point icon (or per-species icons)