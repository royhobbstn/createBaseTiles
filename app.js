import { token } from './keyfile.js';

import { style } from './style.js';

mapboxgl.accessToken = token;
var map = new mapboxgl.Map({
  container: 'map',
  style: style,
  center: [-104.50, 40],
  zoom: 4
});
