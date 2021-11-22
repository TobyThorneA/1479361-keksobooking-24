import {filtersByEvent, rendersData,resetsLabels} from './tags.js';
import {adForm,activateFilterForm} from './form.js';
import {showAlert} from './util.js';

fetch('https://24.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((data) => {
    rendersData(data);
    filtersByEvent(data);
    activateFilterForm(data);
    resetsLabels(data);
  })
  .catch(() =>{
    showAlert();
  });

const sendFormSubmit = (onSuccess, onError) => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    fetch(
      'https://24.javascript.pages.academy/keksobooking',
      {
        method: 'POST',
        body: formData,
      },
    ).then((response) => {
      if (response.ok) {
        onSuccess();
      }
      else {
        throw new Error('Не удалось отправить форму');
      }
    })
      .catch(() => {
        onError();
      });
  });
};


export {sendFormSubmit};
