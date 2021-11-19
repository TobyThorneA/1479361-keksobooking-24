const assigningValue = function (type){
  switch (type) {
    case 'palace':
      return  'Дворец!' ;
    case 'flat':
      return  'Квартира' ;
    case 'house':
      return  'Дом' ;
    case 'bungalow':
      return  'Бунгало' ;
    case 'hotel':
      return  'Отель' ;

    default:
      '';
  }
};

const createCustomBalloon = (ad) =>`<article class="popup">
      <img src=${ad.author.avatar} class="popup__avatar" width="70" height="70" alt="Аватар пользователя">
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
      <p class="popup__description">${ad.offer.description}</p>
      <div class="popup__photos">
        <img src=${ad.offer.photos} class="popup__photo" width="45" height="40" alt="Фотография жилья">
      </div>
    </article>`;

export {createCustomBalloon};
