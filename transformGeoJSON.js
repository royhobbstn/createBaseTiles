//



exports.transformBoundaryLines = function(row) {
  //
  row.properties = {};
  row.tippecanoe = { "layer": "boundary_lines" };

  return row;
};


exports.transformCountries = function(row) {
  //
  row.properties = { name: row.properties.NAME };
  row.tippecanoe = { layer: "countries" };

  return row;
};


exports.transformLabelPoints = function(row) {
  //
  row.properties = { name: row.properties.name };
  row.tippecanoe = { layer: "label_points", maxzoom: 10, minzoom: 5 };

  return row;
};


exports.transformStatesProvinces = function(row) {
  //
  row.properties = { name: row.properties.name };
  row.tippecanoe = { layer: "states_provinces", maxzoom: 10, minzoom: 5 };

  return row;
};


exports.transformProtectedLands = function(row) {
  //
  row.properties = { name: row.properties.name };
  row.tippecanoe = { layer: "protected_lands", maxzoom: 10, minzoom: 5 };

  return row;
};


exports.transformPopulatedPlaces = function(row) {
  //
  row.properties = { name: row.properties.name };
  row.tippecanoe = { layer: "populated_places", maxzoom: 13, minzoom: 8 };

  return row;
};


exports.transformRailroads = function(row) {
  //
  row.properties = {};
  row.tippecanoe = { layer: "railroads", maxzoom: 13, minzoom: 8 };

  return row;
};

exports.transformRoads = function(row) {
  //
  row.properties = {};
  row.tippecanoe = { layer: "roads", maxzoom: 13, minzoom: 8 };

  return row;
};
