import {filtersByEvent, rendersData} from './tags.js';
import {adForm} from './forms.js';
import {showAlert} from './util.js';

fetch('https://24.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((data) => {
    rendersData(data);
    filtersByEvent(data);
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
