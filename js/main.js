const arrayPng = 10;
const adsAdvertisements = [];
const types = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const checkinTime = ['12:00', '13:00', '14:00'];
const checkoutTime = ['12:00', '13:00', '14:00'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator',' conditioner'];
const photos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
function getRandomInteger (min, max){
  if (max <= min || min < 0){
    throw Error('Неверно указан заданный диапазон чисел!');
  }
  return Math.round(Math.random() * (max - min) + min);
}
function getRandomFraction (min, max, after){
  if (max <= min || min < 0){
    throw Error('Неверно указан диапазон чисел!');
  }else{
    const random = Math.random() * (max - min) + min;
    return random.toFixed(after);
  }
}
// Функцию getArray взял с сайта : https://ru.stackoverflow.com/questions/1293985/Как-создать-массив-строк-из-случайной-длины-и-случайных-значений
// Не очень хорошо понял как она работает.
function getArray(randomLength) {
  const maxLength = randomLength.length;
  const lengthOfArray = getRandomInteger(1, maxLength);
  const array = [];
  for(let index = 0; index < lengthOfArray; index++) {
    const indexOfEl = getRandomInteger(0, 5);
    const el = randomLength[indexOfEl];
    if (!array.includes(el)) {
      array.push(el);
    }
  }
  return array;
}
function generateData () {
  for(let index = 1; index <= arrayPng; index++) {
    const lat = getRandomFraction(35.65000, 37.70000, 5);
    const lng = getRandomFraction(139.70000, 139.8000, 5);
    const avatarPng = {
      avatar: {
        author: `img/avatars/user${[index].toString().padStart(2, '0')}.png`,
      },
      offer: {
        title: 'Адрес предложения',
        address: `${lat}, ${lng}`,
        price: getRandomInteger(1, 1000),
        type: types[getRandomInteger(0, 4)],
        rooms: getRandomInteger(1, 5),
        guests:  getRandomInteger(5, 15),
        checkin: checkinTime[getRandomInteger(0, 2)],
        checkout: checkoutTime[getRandomInteger(0, 2)],
        features: getArray(features),
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
