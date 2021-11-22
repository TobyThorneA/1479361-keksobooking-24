const roomNumber = document.querySelector('#room_number');
const capacityGuest = document.querySelector('#capacity');
const typeOfHousing = document.querySelector('#type');
const priceNight = document.querySelector('#price');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const adFormReset = document.querySelector('.ad-form__reset');

adFormReset.addEventListener('click', () => {
  adForm.reset();
  mapFilters.reset();
});

const deactivatePage = () => {
  adForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('map__filters--disabled');
};

const activateFilterForm = function () {
  mapFilters.classList.remove('map__filters--disabled');
};

const activateMainForm = () => {
  adForm.classList.remove('ad-form--disabled');
};

const showPopover = (status) => {
  const body = document.querySelector('body');
  const template = document.querySelector(`#${status}`).content;
  const message = template.firstElementChild.cloneNode(true);
  const onEscapeKeyPress = (evt) => {
    if (evt.key === 'Escape') {
      message.remove();
      window.removeEventListener('keydown', onEscapeKeyPress);
    }
  };
  const onMessageClick = () => {
    message.remove();
    window.removeEventListener('keydown', onEscapeKeyPress);
  };
  message.addEventListener('click', onMessageClick);
  window.addEventListener('keydown', onEscapeKeyPress);
  body.appendChild(message);
};


roomNumber.addEventListener('change', (evt) =>{
  if(evt.target.value === '1' && capacityGuest.value === '1'){
    roomNumber.setCustomValidity('');
    capacityGuest.setCustomValidity('');
  }
  else if(evt.target.value === '2' && capacityGuest.value <= '2'){
    roomNumber.setCustomValidity('');
    capacityGuest.setCustomValidity('');
  }
  else if(evt.target.value === '3' && capacityGuest.value <= '3'){
    roomNumber.setCustomValidity('');
    capacityGuest.setCustomValidity('');
  }
  else if(evt.target.value === '100' && capacityGuest.value === '0'){
    roomNumber.setCustomValidity('');
    capacityGuest.setCustomValidity('');
  }else{
    roomNumber.setCustomValidity('Поле заполнено не верно');
  }
});

capacityGuest.addEventListener('change', (evt) =>{
  if(evt.target.value === '1' && roomNumber.value >= '1'){
    roomNumber.setCustomValidity('');
    capacityGuest.setCustomValidity('');
  }
  else if(evt.target.value === '2' && roomNumber.value >= '2'){
    roomNumber.setCustomValidity('');
    capacityGuest.setCustomValidity('');
  }
  else if(evt.target.value === '3' && roomNumber.value >= '3'){
    roomNumber.setCustomValidity('');
    capacityGuest.setCustomValidity('');
  }
  else if(evt.target.value === '0' && roomNumber.value === '100'){
    roomNumber.setCustomValidity('');
    capacityGuest.setCustomValidity('');
  }else{
    capacityGuest.setCustomValidity('Поле заполнено не верно');
  }

});

typeOfHousing.addEventListener('change', (evt) => {
  if(evt.target.value === 'bungalow'){
    priceNight.setAttribute('min', 0);
    priceNight.setAttribute('placeholder', '0');
  }
  else if(evt.target.value === 'flat'){
    priceNight.setAttribute('min', 1000);
    priceNight.setAttribute('placeholder', '1000');
  }
  else if(evt.target.value === 'hotel'){
    priceNight.setAttribute('min', 3000);
    priceNight.setAttribute('placeholder', '3000');
  }
  else if(evt.target.value === 'house'){
    priceNight.setAttribute('min', 5000);
    priceNight.setAttribute('placeholder', '5000');
  }
  else if(evt.target.value === 'palace'){
    priceNight.setAttribute('min', 10000);
    priceNight.setAttribute('placeholder', '10000');
  }
});
timeIn.addEventListener('change', (evt) => {
  const {
    target: { value },
  } = evt;

  timeOut.value = value;
});

timeOut.addEventListener('change', (evt) => {
  const {
    target: { value },
  } = evt;

  timeIn.value = value;
});

export{adForm,mapFilters,adFormReset,showPopover,deactivatePage,activateFilterForm,activateMainForm};
