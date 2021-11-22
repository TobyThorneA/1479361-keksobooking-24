import './form.js';
import {activateMainForm ,deactivatePage} from './form.js';

const adFormReset = document.querySelector('.ad-form__reset');

deactivatePage();

const map = L.map('map-canvas')
  .on('load', () => {
    activateMainForm();
  })
  .setView({
    lat: 35.6895,
    lng: 139.692,
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
