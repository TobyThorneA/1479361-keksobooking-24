import './filters.js';
import './map.js';
import './tags.js';
import {showPopover, adForm,mapFilters} from './form.js';
import {sendFormSubmit} from './api.js';
import {mainIcon} from './tags.js';
import {map} from './map.js';


const onFormSubmitSuccess = () => {
  showPopover('success');
  adForm.reset();
  mapFilters.reset();
  map.closePopup();
  mainIcon.setLatLng({
    lat: 35.6895,
    lng: 139.692,
  });
};

const onFormSubmitError = () => {
  showPopover('error');
};

sendFormSubmit(onFormSubmitSuccess, onFormSubmitError);

