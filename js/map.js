import './forms.js';
import {adForm, mapFilters} from './forms.js';

const adFormReset = document.querySelector('.ad-form__reset');

const map = L.map('map-canvas')
  .on('load', () => {
    adForm.classList.remove('ad-form--disabled');
    mapFilters.classList.remove('map__filters--disabled');
  })
  .setView({
    lat: 35.68390,
    lng: 139.75323,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);
const markerGroup = L.layerGroup().addTo(map);

adFormReset.addEventListener('click', () => {
  map.closePopup();
});

export {map,markerGroup};
