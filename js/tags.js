import {map} from './map.js';
import {createCustomBalloon} from './balloon.js';

const formAdress = document.querySelector('#address');
formAdress.defaultValue = 'Координаты: 35.6895, 139.692';

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

  received.forEach((object) => {
    const similarIcon = L.marker({
      lat: object.location.lat,
      lng: object.location.lng,
    },
    {
      icon: similarIconSvg,
    },
    );
    similarIcon
      .addTo(map)
      .bindPopup(createCustomBalloon(object));
  });
};

export {rendersData};
