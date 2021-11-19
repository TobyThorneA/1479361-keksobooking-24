
// import  './data.js';
// import {adsAdvertisements} from './data.js';
// adsAdvertisements;
// import './generate.js';
// import {dataList} from './generate.js';
// dataList;

import './map.js';
import { showPopover, adForm } from './forms.js';
import { sendFormSubmit } from './api.js';

const onFormSubmitSuccess = () => {
  showPopover('success');
  adForm.reset();
};

const onFormSubmitError = () => {
  showPopover('error');
};

sendFormSubmit(onFormSubmitSuccess, onFormSubmitError);

