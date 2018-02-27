# createBaseTiles
Create a simplistic basemap using Natural Earth data and tippecanoe.

## Setup

```
bash downloadGeo.sh
node convertToGeoJSON.js
tippecanoe -o ./tiles/basemap.mbtiles -zg --drop-densest-as-needed ./geojson/*.geojson
```

