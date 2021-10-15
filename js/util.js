function getRandomInteger (smaller, larger){
  const lower = Math.ceil(Math.min(Math.abs(smaller), Math.abs(larger)));
  const upper = Math.floor(Math.max(Math.abs(smaller), Math.abs(larger)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}
function getRandomFraction (smaller, larger, after = 1){
  const lower = Math.min(Math.abs(smaller), Math.abs(larger));
  const upper = Math.max(Math.abs(smaller), Math.abs(larger));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(after);
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
export {getRandomInteger, getRandomFraction, getArray};
