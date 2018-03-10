export const style = {
  "version": 8,
  "name": "Mapbox Dark",
  "sources": {
    "composite": {
      "url": "mapbox://mapbox.mapbox-terrain-v2,mapbox.mapbox-streets-v7",
      "type": "vector"
    }
  },
  "visibility": "public",
  "layers": [{
      "id": "background",
      "type": "background",
      "layout": {},
      "paint": { "background-color": "hsl(55, 1%, 20%)" }

    },
    {
      "id": "landcover_wood",
      "type": "fill",
      "metadata": { "mapbox:group": "1456970288113.8113" },
      "source": "composite",
      "source-layer": "landcover",
      "maxzoom": 14,
      "filter": ["==", "class", "wood"],
      "layout": {},
      "paint": { "fill-color": "hsl(55, 1%, 20%)", "fill-opacity": 0.1, "fill-antialias": false }
    },
    {
      "id": "landcover_scrub",
      "type": "fill",
      "metadata": { "mapbox:group": "1456970288113.8113" },
      "source": "composite",
      "source-layer": "landcover",
      "maxzoom": 14,
      "filter": ["==", "class", "scrub"],
      "layout": {},
      "paint": { "fill-color": "hsl(55, 1%, 20%)", "fill-opacity": 0.1, "fill-antialias": false }
    }, {
      "id": "landcover_grass",
      "type": "fill",
      "metadata": { "mapbox:group": "1456970288113.8113" },
      "source": "composite",
      "source-layer": "landcover",
      "maxzoom": 14,
      "filter": ["==", "class", "grass"],
      "layout": {},
      "paint": { "fill-color": "hsl(55, 1%, 20%)", "fill-opacity": 0.1, "fill-antialias": false }
    },
    {
      "id": "landcover_crop",
      "type": "fill",
      "metadata": { "mapbox:group": "1456970288113.8113" },
      "source": "composite",
      "source-layer": "landcover",
      "maxzoom": 14,
      "filter": ["==", "class", "crop"],
      "layout": {},
      "paint": { "fill-color": "hsl(55, 1%, 20%)", "fill-opacity": 0.1, "fill-antialias": false }
    }, {
      "id": "national_park",
      "type": "fill",
      "source": "composite",
      "source-layer": "landuse_overlay",
      "layout": {},
      "paint": {
        "fill-color": "hsl(132, 2%, 20%)",
        "fill-opacity": {
          "base": 1,
          "stops": [
            [5, 0],
            [6, 0.5]
          ]
        }
      }
    }, {
      "id": "parks",
      "type": "fill",
      "source": "composite",
      "source-layer": "landuse",
      "filter": ["==", "class", "park"],
      "layout": {},
      "paint": {
        "fill-color": "hsl(132, 2%, 20%)",
        "fill-opacity": {
          "base": 1,
          "stops": [
            [5, 0],
            [6, 0.75]
          ]
        }
      }
    }, {
      "id": "waterway-river-canal",
      "type": "line",
      "source": "composite",
      "source-layer": "waterway",
      "minzoom": 8,
      "filter": ["any", ["==", "class", "canal"],
        ["==", "class", "river"]
      ],
      "layout": {
        "line-cap": {
          "base": 1,
          "stops": [
            [0, "butt"],
            [11, "round"]
          ]
        },
        "line-join": "round"
      },
      "paint": {
        "line-color": "hsl(185, 2%, 10%)",
        "line-width": {
          "base": 1.3,
          "stops": [
            [8.5, 0.1],
            [20, 8]
          ]
        },
        "line-opacity": {
          "base": 1,
          "stops": [
            [8, 0],
            [8.5, 1]
          ]
        }
      }
    }, {
      "id": "road-street",
      "metadata": { "mapbox:group": "1444855786460.0557" },
      "ref": "road-street-low",
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [12.5, 0.5],
            [14, 2],
            [18, 18]
          ]
        },
        "line-color": "hsl(0, 0%, 27%)",
        "line-opacity": {
          "base": 1,
          "stops": [
            [13.99, 0],
            [14, 1]
          ]
        }
      }
    }, {
      "id": "road-secondary-tertiary",
      "metadata": { "mapbox:group": "1444855786460.0557" },
      "ref": "road-main-case",
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [8.5, 0.5],
            [10, 0.75],
            [18, 26]
          ]
        },
        "line-color": "hsl(0, 0%, 27%)",
        "line-opacity": {
          "base": 1.2,
          "stops": [
            [5, 0],
            [5.5, 1]
          ]
        }
      }
    }, {
      "id": "road-primary",
      "metadata": { "mapbox:group": "1444855786460.0557" },
      "ref": "road-primary-case",
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [5, 0.75],
            [18, 32]
          ]
        },
        "line-color": "hsl(0, 0%, 27%)",
        "line-opacity": {
          "base": 1.2,
          "stops": [
            [5, 0],
            [5.5, 1]
          ]
        }
      }
    }, {
      "id": "road-trunk",
      "metadata": { "mapbox:group": "1444855786460.0557" },
      "ref": "road-trunk-case",
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [5, 0.5],
            [9, 1.4],
            [18, 32]
          ]
        },
        "line-color": "hsl(0, 0%, 27%)",
        "line-opacity": 1
      }
    }, {
      "id": "road-motorway",
      "metadata": { "mapbox:group": "1444855786460.0557" },
      "ref": "road-motorway-case",
      "paint": {
        "line-width": {
          "base": 1.5,
          "stops": [
            [5, 0.75],
            [18, 32]
          ]
        },
        "line-color": "hsl(0, 0%, 27%)",
        "line-opacity": 1
      }
    }, {
      "id": "road-rail",
      "type": "line",
      "metadata": { "mapbox:group": "1444855786460.0557" },
      "source": "composite",
      "source-layer": "road",
      "minzoom": 13,
      "filter": ["all", ["==", "$type", "LineString"],
        ["all", ["in", "class", "major_rail", "minor_rail"],
          ["!in", "structure", "bridge", "tunnel"]
        ]
      ],
      "layout": { "line-join": "round" },
      "paint": {
        "line-color": "hsl(0, 0%, 17%)",
        "line-width": {
          "base": 1,
          "stops": [
            [14, 0.75],
            [20, 1]
          ]
        }
      }
    }, {
      "id": "state-label-sm",
      "type": "symbol",
      "metadata": { "mapbox:group": "1444856151690.9143" },
      "source": "composite",
      "source-layer": "state_label",
      "minzoom": 3,
      "maxzoom": 9,
      "filter": ["<", "area", 20000],
      "layout": {
        "text-size": {
          "base": 1,
          "stops": [
            [6, 10],
            [9, 14]
          ]
        },
        "text-transform": "uppercase",
        "text-font": ["DIN Offc Pro Bold", "Arial Unicode MS Bold"],
        "text-field": {
          "base": 1,
          "stops": [
            [0, "{abbr}"],
            [6, "{name_en}"]
          ]
        },
        "text-letter-spacing": 0.15,
        "text-max-width": 5
      },
      "paint": { "text-opacity": 1, "text-color": "hsl(0, 0%, 50%)", "text-halo-color": "hsla(0, 0%, 10%, 0.75)", "text-halo-width": 1, "text-halo-blur": 0 }
    }, {
      "id": "state-label-md",
      "type": "symbol",
      "metadata": { "mapbox:group": "1444856151690.9143" },
      "source": "composite",
      "source-layer": "state_label",
      "minzoom": 3,
      "maxzoom": 8,
      "filter": ["all", ["<", "area", 80000],
        [">=", "area", 20000]
      ],
      "layout": {
        "text-size": {
          "base": 1,
          "stops": [
            [5, 10],
            [8, 16]
          ]
        },
        "text-transform": "uppercase",
        "text-font": ["DIN Offc Pro Bold", "Arial Unicode MS Bold"],
        "text-field": {
          "base": 1,
          "stops": [
            [0, "{abbr}"],
            [5, "{name_en}"]
          ]
        },
        "text-letter-spacing": 0.15,
        "text-max-width": 6
      },
      "paint": { "text-opacity": 1, "text-color": "hsl(0, 0%, 50%)", "text-halo-color": "hsla(0, 0%, 10%, 0.75)", "text-halo-width": 1, "text-halo-blur": 0 }
    }, {
      "id": "state-label-lg",
      "type": "symbol",
      "metadata": { "mapbox:group": "1444856151690.9143" },
      "source": "composite",
      "source-layer": "state_label",
      "minzoom": 3,
      "maxzoom": 7,
      "filter": [">=", "area", 80000],
      "layout": {
        "text-size": {
          "base": 1,
          "stops": [
            [4, 10],
            [7, 18]
          ]
        },
        "text-transform": "uppercase",
        "text-font": ["DIN Offc Pro Bold", "Arial Unicode MS Bold"],
        "text-padding": 1,
        "text-field": {
          "base": 1,
          "stops": [
            [0, "{abbr}"],
            [4, "{name_en}"]
          ]
        },
        "text-letter-spacing": 0.15,
        "text-max-width": 6
      },
      "paint": { "text-opacity": 1, "text-color": "hsl(0, 0%, 50%)", "text-halo-color": "hsla(0, 0%, 10%, 0.75)", "text-halo-width": 1, "text-halo-blur": 0 }
    }, {
      "id": "country-label-sm",
      "type": "symbol",
      "metadata": { "mapbox:group": "1444856144497.7825" },
      "source": "composite",
      "source-layer": "country_label",
      "minzoom": 1,
      "maxzoom": 10,
      "filter": [">=", "scalerank", 5],
      "layout": {
        "text-field": "{name_en}",
        "text-max-width": 6,
        "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Regular"],
        "text-size": {
          "base": 0.9,
          "stops": [
            [5, 14],
            [9, 22]
          ]
        }
      },
      "paint": { "text-halo-width": 1.25, "text-halo-color": "hsla(0, 0%, 10%, 0.75)", "text-color": "hsl(0, 0%, 45%)", "text-halo-blur": 0 }
    }, {
      "id": "country-label-md",
      "type": "symbol",
      "metadata": { "mapbox:group": "1444856144497.7825" },
      "source": "composite",
      "source-layer": "country_label",
      "minzoom": 1,
      "maxzoom": 8,
      "filter": ["in", "scalerank", 3, 4],
      "layout": {
        "text-field": {
          "base": 1,
          "stops": [
            [0, "{code}"],
            [2, "{name_en}"]
          ]
        },
        "text-max-width": 6,
        "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Regular"],
        "text-size": {
          "base": 1,
          "stops": [
            [3, 10],
            [8, 24]
          ]
        }
      },
      "paint": { "text-halo-width": 1.25, "text-halo-color": "hsla(0, 0%, 10%, 0.75)", "text-color": "hsl(0, 0%, 45%)", "text-halo-blur": 0 }
    }, {
      "id": "country-label-lg",
      "type": "symbol",
      "metadata": { "mapbox:group": "1444856144497.7825" },
      "source": "composite",
      "source-layer": "country_label",
      "minzoom": 1,
      "maxzoom": 7,
      "filter": ["in", "scalerank", 1, 2],
      "layout": {
        "text-field": "{name_en}",
        "text-max-width": {
          "base": 1,
          "stops": [
            [0, 5],
            [3, 6]
          ]
        },
        "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Regular"],
        "text-size": {
          "base": 1,
          "stops": [
            [1, 10],
            [6, 24]
          ]
        }
      },
      "paint": { "text-halo-width": 1.25, "text-halo-color": "hsla(0, 0%, 10%, 0.75)", "text-color": "hsl(0, 0%, 45%)", "text-halo-blur": 0 }
    }
  ],
  "created": 0,
  "modified": 0,
  "owner": "mapbox",
  "id": "dark-v9",
  "draft": false
};
