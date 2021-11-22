const mapFilters = document.querySelector('.map__filters');
const housingType = mapFilters.querySelector('#housing-type');
const housingPrice = mapFilters.querySelector('#housing-price');
const housingRooms = mapFilters.querySelector('#housing-rooms');
const housingGuests = mapFilters.querySelector('#housing-guests');
const LOW_PRICE = 0;
const MIDDLE_PRICE = 10000;
const HIGH_PRICE = 50000;

const filterByHouse = (advert) => housingType.value === 'any' || housingType.value === advert.offer.type;

const filterByPrice = (advert) => housingPrice.value === 'any'
   || (housingPrice.value === 'low' && advert.offer.price >= LOW_PRICE && advert.offer.price < MIDDLE_PRICE)
   || (housingPrice.value === 'middle' && advert.offer.price >= MIDDLE_PRICE && advert.offer.price <= HIGH_PRICE)
   || (housingPrice.value === 'high' && advert.offer.price > HIGH_PRICE);

const filterByRooms = (advert) => housingRooms.value === 'any' || Number(housingRooms.value) === advert.offer.rooms;

const filterByGuests = (advert) => housingGuests.value === 'any' || Number(housingGuests.value) === advert.offer.guests;
const filterByFeatures = (advert) => {
  const features = advert.offer.features || [];
  const featuresListNode = mapFilters.querySelectorAll('.map__checkbox:checked');
  const featuresSelected = Array.from(featuresListNode).map((input) => input.value);
  return featuresSelected.every((element) => features.includes(element));
};

const filterAdverts = (advert) => filterByHouse(advert) && filterByPrice(advert) && filterByRooms(advert) && filterByGuests(advert) && filterByFeatures(advert);

export {filterAdverts};
