import './forms.js';
import {adsAdvertisements} from './data.js';
import {adForm, mapFilters} from './forms.js';
import {assigningValue} from './generate.js';
const formAdress = document.querySelector('#address');
formAdress.value = 'Координаты: 35.6895, 139.692';

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


const createCastumBalloon = (ad) =>`<article class="popup">
      <img src=${ad.author.avatart} class="popup__avatar" width="70" height="70" alt="Аватар пользователя">
      <h3 class="popup__title">${ad.offer.title}</h3>
      <p class="popup__text popup__text--address">${ad.offer.address}</p>
      <p class="popup__text popup__text--price">${ad.offer.price} <span>₽/ночь</span></p>
      <h4 class="popup__type">${assigningValue(ad.offer.type)}</h4>
      <p class="popup__text popup__text--capacity">${ad.offer.rooms} комнаты для ${ad.offer.guests} гостей</p>
      <p class="popup__text popup__text--time">Заезд после ${ad.offer.checkin}, выезд до ${ad.offer.checkout}</p>
      <ul class="popup__features">
        <li class="popup__feature popup__feature--wifi"></li>
        <li class="popup__feature popup__feature--dishwasher"></li>
        <li class="popup__feature popup__feature--parking"></li>
        <li class="popup__feature popup__feature--washer"></li>
        <li class="popup__feature popup__feature--elevator"></li>
        <li class="popup__feature popup__feature--conditioner"></li>
      </ul>
      <p class="popup__description">Великолепная квартира-студия в центре Токио. Подходит как туристам, так и бизнесменам. Квартира полностью укомплектована и недавно отремонтирована.</p>
      <div class="popup__photos">
        <img src=${ad.offer.photos} class="popup__photo" width="45" height="40" alt="Фотография жилья">
      </div>
    </article>`;

adsAdvertisements.forEach((object) => {
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
    .bindPopup(createCastumBalloon(object));
});

export {};
