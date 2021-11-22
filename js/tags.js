import {map,markerGroup} from './map.js';
import {createCustomBalloon} from './balloon.js';
import {filterAdverts} from './filters.js';
import {debounce} from './util.js';

const mapFilters = document.querySelector('.map__filters');
const formAdress = document.querySelector('#address');
const adFormReset = document.querySelector('.ad-form__reset');

formAdress.defaultValue = 'Координаты: 35.68390, 139.75323';

const mainIconSvg = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26,52],
},
);

const mainIcon = L.marker({
  lat: 35.6895,
  lng: 139.692,
},
{
  draggable: true,
  icon: mainIconSvg,
},
);
mainIcon.addTo(map);

adFormReset.addEventListener('click', () => {
  mainIcon.setLatLng({
    lat: 35.6895,
    lng: 139.692,
  });
});

mainIcon.on('moveend', (evt) => {
  const { lat, lng } = evt.target.getLatLng();
  formAdress.value = `Координаты: ${lat.toFixed(5)}, ${lng.toFixed(5)}`;
});

const similarIconSvg = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [40, 40],
  iconAnchor:[20, 40],
},
);

const rendersData = (received) => {

  received
    .filter(filterAdverts)
    .slice(0, 10)
    .forEach((object) => {
      const similarIcon = L.marker({
        lat: object.location.lat,
        lng: object.location.lng,
      },
      {
        icon: similarIconSvg,
      },
      );
      similarIcon
        .addTo(markerGroup)
        .bindPopup(createCustomBalloon(object));
    });
};
const filtersByEvent = (data) => {
  mapFilters.addEventListener('change', debounce(() => {
    markerGroup.clearLayers();
    rendersData(data);
  }));
};

export {mainIcon, rendersData, filtersByEvent};
