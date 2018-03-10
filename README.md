# createBaseTiles
Create a simplistic basemap using Natural Earth data and tippecanoe.

## Setup

```
bash downloadGeo.sh
node convertToGeoJSON.js
tippecanoe -e ./tiles/basemap -zg --drop-densest-as-needed ./geojson/*.geojson
aws s3 sync ./tiles/basemap s3://basemap-tiles/census-basemap --content-encoding gzip --delete 
```

