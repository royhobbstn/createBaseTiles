var shapefile = require("shapefile");
const fs = require('fs');

const {
  transformBoundaryLines,
  transformCountries,
  transformLabelPoints,
  transformStatesProvinces,
  transformProtectedLands,
  transformPopulatedPlaces,
  transformRailroads,
  transformRoads,
  transformUrbanAreas
} = require('./transformGeoJSON.js');

const boundary_lines = [];
const countries = [];
const label_points = [];
const states_provinces = [];
const protected_lands = [];
const populated_places = [];
const railroads = [];
const roads = [];
const urban_areas = [];

shapefile.open("./shapefiles/ne_10m_admin_0_boundary_lines_land.shp")
  .then(source => source.read()
    .then(function log(result) {
      if (result.done) return;
      boundary_lines.push(transformBoundaryLines(result.value));
      return source.read().then(log);
    }))
  .then(() => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./geojson/ne_10m_admin_0_boundary_lines_land.geojson', JSON.stringify(boundary_lines), 'utf8', err => {
        if (err) {
          console.log('error with boundary_lines');
          console.log(err);
          return reject(err);
        }
        console.log('done saving boundary_lines as geoJson');
        resolve();
      });
    });
  })

  .then(() => {
    return shapefile.open("./shapefiles/ne_10m_admin_0_countries_lakes.shp");
  })
  .then(source => source.read()
    .then(function log(result) {
      if (result.done) return;
      countries.push(transformCountries(result.value));
      return source.read().then(log);
    }))
  .then(() => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./geojson/ne_10m_admin_0_countries_lakes.geojson', JSON.stringify(countries), 'utf8', err => {
        if (err) {
          console.log('error with countries');
          console.log(err);
          return reject(err);
        }
        console.log('done saving countries as geoJson');
        resolve();
      });
    });
  })

  .then(() => {
    return shapefile.open("./shapefiles/ne_10m_admin_1_label_points.shp");
  })
  .then(source => source.read()
    .then(function log(result) {
      if (result.done) return;
      label_points.push(transformLabelPoints(result.value));
      return source.read().then(log);
    }))
  .then(() => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./geojson/ne_10m_admin_1_label_points.geojson', JSON.stringify(label_points), 'utf8', err => {
        if (err) {
          console.log('error with label_points');
          console.log(err);
          return reject(err);
        }
        console.log('done saving label_points as geoJson');
        resolve();
      });
    });
  })

  .then(() => {
    return shapefile.open("./shapefiles/ne_10m_admin_1_states_provinces_lines.shp");
  })
  .then(source => source.read()
    .then(function log(result) {
      if (result.done) return;
      states_provinces.push(transformStatesProvinces(result.value));
      return source.read().then(log);
    }))
  .then(() => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./geojson/ne_10m_admin_1_states_provinces_lines.geojson', JSON.stringify(states_provinces), 'utf8', err => {
        if (err) {
          console.log('error with states_provinces');
          console.log(err);
          return reject(err);
        }
        console.log('done saving states_provinces as geoJson');
        resolve();
      });
    });
  })

  .then(() => {
    return shapefile.open("./shapefiles/ne_10m_parks_and_protected_lands_area.shp");
  })
  .then(source => source.read()
    .then(function log(result) {
      if (result.done) return;
      protected_lands.push(transformProtectedLands(result.value));
      return source.read().then(log);
    }))
  .then(() => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./geojson/ne_10m_parks_and_protected_lands_area.geojson', JSON.stringify(protected_lands), 'utf8', err => {
        if (err) {
          console.log('error with protected_lands');
          console.log(err);
          return reject(err);
        }
        console.log('done saving protected_lands as geoJson');
        resolve();
      });
    });
  })

  .then(() => {
    return shapefile.open("./shapefiles/ne_10m_populated_places_simple.shp");
  })
  .then(source => source.read()
    .then(function log(result) {
      if (result.done) return;
      populated_places.push(transformPopulatedPlaces(result.value));
      return source.read().then(log);
    }))
  .then(() => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./geojson/ne_10m_populated_places_simple.geojson', JSON.stringify(populated_places), 'utf8', err => {
        if (err) {
          console.log('error with populated_places');
          console.log(err);
          return reject(err);
        }
        console.log('done saving populated_places as geoJson');
        resolve();
      });
    });
  })

  .then(() => {
    return shapefile.open("./shapefiles/ne_10m_railroads_north_america.shp");
  })
  .then(source => source.read()
    .then(function log(result) {
      if (result.done) return;
      railroads.push(transformRailroads(result.value));
      return source.read().then(log);
    }))
  .then(() => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./geojson/ne_10m_railroads_north_america.geojson', JSON.stringify(railroads), 'utf8', err => {
        if (err) {
          console.log('error with railroads');
          console.log(err);
          return reject(err);
        }
        console.log('done saving railroads as geoJson');
        resolve();
      });
    });
  })

  .then(() => {
    return shapefile.open("./shapefiles/ne_10m_roads_north_america.shp");
  })
  .then(source => source.read()
    .then(function log(result) {
      if (result.done) return;
      roads.push(transformRoads(result.value));
      return source.read().then(log);
    }))
  .then(() => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./geojson/ne_10m_roads_north_america.geojson', JSON.stringify(roads), 'utf8', err => {
        if (err) {
          console.log('error with roads');
          console.log(err);
          return reject(err);
        }
        console.log('done saving roads as geoJson');
        resolve();
      });
    });
  })

  .then(() => {
    return shapefile.open("./shapefiles/ne_10m_urban_areas.shp");
  })
  .then(source => source.read()
    .then(function log(result) {
      if (result.done) return;
      urban_areas.push(transformUrbanAreas(result.value));
      return source.read().then(log);
    }))
  .then(() => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./geojson/ne_10m_urban_areas.geojson', JSON.stringify(urban_areas), 'utf8', err => {
        if (err) {
          console.log('error with urban_areas');
          console.log(err);
          return reject(err);
        }
        console.log('done saving urban_areas as geoJson');
        resolve();
      });
    });
  })


  .catch(error => console.error(error.stack));
