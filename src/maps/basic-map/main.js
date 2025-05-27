import mapboxgl from 'mapbox-gl';
import { MAPBOX_TOKEN } from '../../shared/mapbox-config.js';

mapboxgl.accessToken = MAPBOX_TOKEN;

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-74.5, 40],
  zoom: 9
});
