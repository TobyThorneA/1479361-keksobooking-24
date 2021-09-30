function getRandomInteger (min, max){
  if (max <= min || min < 0){
    throw Error('Неверно указан заданный диапазон чисел!');
  }
  return Math.round(Math.random() * (max - min) + min);
}
getRandomInteger(1, 10);

function getRandomFraction (min, max, after){
  if (max <= min || min < 0){
    throw Error('Неверно указан диапазон чисел!');
  }else{
    const random = Math.random() * (max - min) + min;
    return random.toFixed(after);
  }
}
getRandomFraction(1, 10, 3);
