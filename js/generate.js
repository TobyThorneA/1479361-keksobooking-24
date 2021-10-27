import './data.js';
import {adsAdvertisements} from './data.js';
adsAdvertisements;
const cardTemplateContainer = document.querySelector('#card').content;
const dataList = cardTemplateContainer.querySelector('.popup');
const newDataFragment = document.createDocumentFragment();
const createDomElement = document.querySelector('#map-canvas');
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
const assignment = function(array){
  for (let i = 0; i < array.length; i++){
    const newElement = dataList.cloneNode(true);
    if(array[i].offer.title){
      newElement.querySelector('.popup__title').textContent = array[i].offer.title;
    }
    if(array[i].offer.address){
      newElement.querySelector('.popup__text--address').textContent = array[i].offer.address;
    }
    if(array[i].offer.price){
      newElement.querySelector('.popup__text--price').textContent = `${array[i].offer.price} ₽/ночь`;
    }
    if(assigningValue(array[i].offer.type)){
      newElement.querySelector('.popup__type').textContent = assigningValue(array[i].offer.type);
    }
    if(array[i].offer.rooms && array[i].offer.guests ){
      newElement.querySelector('.popup__text--capacity').textContent = `${array[i].offer.rooms} комната(ы) для ${array[i].offer.guests} гостей`;
    }
    if(array[i].offer.checkin && array[i].offer.checkout){
      newElement.querySelector('.popup__text--time').textContent = `Заезд в ${array[i].offer.checkin} выезд до ${array[i].offer.checkout}`;
    }
    if(array[i].offer.features){
      newElement.querySelector('.popup__features').textContent = array[i].offer.features;
    }
    if(array[i].offer.description){
      newElement.querySelector('.popup__description').textContent = array[i].offer.description;
    }
    if(array[i].offer.photos){
      newElement.querySelector('.popup__photos').src = array[i].offer.photos;
    }
    if(array[i].avatar.author){
      newElement.querySelector('.popup__avatar').src = array[i].avatar.author;
    }
    if (array[i] === array[0]){
      newDataFragment.appendChild(newElement);
    }
  }
};
assignment(adsAdvertisements);
createDomElement.appendChild(newDataFragment);
export {dataList};
