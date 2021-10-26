import './data.js';
import {adsAdvertisements} from './data.js';
adsAdvertisements;
const cardTemplateContainer = document.querySelector('#card').content;
const dataList = cardTemplateContainer.querySelector('.popup');
console.log('0', dataList);
const newDataFragment = document.createDocumentFragment();
const createDomElement = document.querySelector('#map-canvas');
console.log('2', cardTemplateContainer);
console.log('3',adsAdvertisements );
console.log('4', dataList);
// adsAdvertisements.forEach((ad) =>{
// console.log('offer' ,ad);
// });
console.log('5', newDataFragment);
const type1 = function (type){
console.log('type',type);
  switch (type) {
  case 'palace':
   return  'Дворец!' ;


  default:
    '';
}
};
console.log('type1',type1('palace'));
const assignment = function(array){
  for (let i = 0; i < array.length; i++){
    const newElement = dataList.cloneNode(true);
    console.log('6', newElement);
    if(array[i].offer.title){
      newElement.querySelector('.popup__title').textContent = array[i].offer.title;
    }
    newElement.querySelector('.popup__text--address').textContent = array[i].offer.address;
    newElement.querySelector('.popup__text--price').textContent = `${array[i].offer.price} ₽/ночь`;
    // Как сопоставить тип жилья с подписями?
    newElement.querySelector('.popup__type').textContent = type1(array[i].offer.type);
    console.log('7', newElement.querySelector('.popup__type').textContent = array[i].offer.type);
    newElement.querySelector('.popup__text--capacity').textContent = `${array[i].offer.rooms} комната(ы) для ${array[i].offer.guests} гостей`;
    newElement.querySelector('.popup__text--time').textContent = `Заезд в ${array[i].offer.checkin} выезд до ${array[i].offer.checkout}`;
    // Как скрыть блок в карточке, если он пуcтой?
    newElement.querySelector('.popup__features').textContent = array[i].offer.features;
    newElement.querySelector('.popup__description').textContent = array[i].offer.description;
    //Иногда выдает undefiend не отоброжает фото
    newElement.querySelector('.popup__photos').src = array[i].offer.photos;
    newElement.querySelector('.popup__avatar').src = array[i].avatar.author;

    if(i === 0){
      newDataFragment.appendChild(newElement);
    }
  }
  createDomElement.appendChild(newDataFragment);
};
assignment(adsAdvertisements);
createDomElement.appendChild(newDataFragment);
console.log('8', createDomElement );
// Как отриcовать только один DOM элемент
// .
// .


// const searchForEmptiness = function(array){
//   for (let i = 0; i < array.length; i++){
//     if(!array[i]){
//       array[i].classList.remove();
//     }
//   }
// };
// searchForEmptiness(createDomElement);
//  Эта функция для проверки доступных удобств в типе жилья. Её как-то надо вставить куда-то =)
// createDomElement.forEach((element) => {
//   const necessaryElement = adsAdvertisements.some((userElement) => element.classList.contains('text--' + userElement),
//   );
//   if (!necessaryElement){
//     element.classList.remove();
//   }
// });
export {dataList};
