import './forms.js';
import {adForm, mapFilters} from './forms.js';

const map = L.map('map-canvas')
  .on('load', () => {
    adForm.classList.remove('ad-form--disabled');
    mapFilters.classList.remove('map__filters--disabled');
  })
  .setView({
    lat: 35.6895,
    lng: 139.692,
  }, 100);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

// document.addEventListener('load', () => {
// map
//   .on('load', () => {
//     adForm.classList.remove('ad-form--disabled');
//     mapFilters.classList.remove('map__filters--disabled');
// })
// .setView({
//     lat: 35.6895,
//     lng: 139.692,
//   }, 100);
// });
export {map};
