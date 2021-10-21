import './data.js';
import {generateData} from './data.js';
const advertisement = generateData();
const offer = advertisement.offer;
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
cardTemplate.querySelector('.popup__title').textContent = offer.title;
cardTemplate.querySelector('.popup__text--address').textContent = offer.address;
cardTemplate.querySelector('.popup__text--price').textContent = `${offer.price}₽/ночь`;

