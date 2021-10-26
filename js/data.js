import './util.js';
import {getRandomInteger, getRandomFraction, getArray} from './util.js';
const arrayPng = 10;
const adsAdvertisements = [];
const types = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const checkinTime = ['12:00', '13:00', '14:00'];
const checkoutTime = ['12:00', '13:00', '14:00'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator','conditioner'];
const photos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
function generateData () {
  for(let index = 1; index <= arrayPng; index++) {
    const lat = getRandomFraction(35.65000, 37.70000, 5);
    const lng = getRandomFraction(139.70000, 139.8000, 5);
    const avatarPng = {
      avatar: {
        author: `img/avatars/user${index.toString().padStart(2, '0')}.png`,
      },
      offer: {
        title: 'Адрес предложения',
        address: `${lat}, ${lng}`,
        price: getRandomInteger(1500, 3000),
        type: types[getRandomInteger(0, 4)],
        rooms: getRandomInteger(1, 5),
        guests:  getRandomInteger(5, 15),
        checkin: checkinTime[getRandomInteger(0, 2)],
        checkout: checkoutTime[getRandomInteger(0, 2)],
        features:  getArray(features),
        description: 'Тут будет описание помещения',
        photos: getArray(photos),
        lan: lat,
        lng: lng,
      },
    };
    adsAdvertisements.push(avatarPng);
  }
}
generateData();
export {adsAdvertisements};
