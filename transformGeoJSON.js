//



exports.transformBoundaryLines = function(row) {
  //
  row.tippecanoe = { "layer": "boundary_lines", maxzoom: 13, minzoom: row.properties.scalerank };
  row.properties = { scalerank: row.properties.scalerank };

  return row;
};


exports.transformCountries = function(row) {
  //
  row.tippecanoe = { layer: "countries", maxzoom: 13, minzoom: row.properties.scalerank };
  row.properties = { name: row.properties.NAME, scalerank: row.properties.scalerank };

  return row;
};


exports.transformLabelPoints = function(row) {
  //
  row.tippecanoe = { layer: "label_points", maxzoom: 13, minzoom: row.properties.scalerank };
  row.properties = { name: row.properties.name, scalerank: row.properties.scalerank };

  return row;
};


exports.transformStatesProvinces = function(row) {
  //
  row.tippecanoe = { layer: "states_provinces", maxzoom: 13, minzoom: row.properties.scalerank };
  row.properties = { name: row.properties.name, scalerank: row.properties.scalerank };

  return row;
};


exports.transformProtectedLands = function(row) {
  //
  row.tippecanoe = { layer: "protected_lands", maxzoom: 13, minzoom: 6 };
  row.properties = { name: row.properties.name };

  return row;
};


exports.transformPopulatedPlaces = function(row) {
  //
  row.tippecanoe = { layer: "populated_places", maxzoom: 13, minzoom: row.properties.scalerank };
  row.properties = { name: row.properties.name, scalerank: row.properties.scalerank };

  return row;
};


exports.transformRailroads = function(row) {
  //
  row.tippecanoe = { layer: "railroads", maxzoom: 13, minzoom: row.properties.scalerank };
  row.properties = { scalerank: row.properties.scalerank };

  return row;
};

exports.transformRoads = function(row) {
  //
  row.tippecanoe = { layer: "roads", maxzoom: 13, minzoom: row.properties.scalerank };
  row.properties = { scalerank: row.properties.scalerank };

  return row;
};

exports.transformUrbanAreas = function(row) {
  //
  row.tippecanoe = { layer: "urban_areas", maxzoom: 13, minzoom: 5 };
  row.properties = {};

  return row;
};
