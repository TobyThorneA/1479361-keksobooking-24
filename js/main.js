function reditTemereInteger (min, max){
  if (max <= min || min < 0){
    return 'error';
  }
  return Math.round(Math.random() * (max - min) + min);
}
reditTemereInteger(1, 10);

function reditTemereFractus (min, max, after){
  if (max <= min || min < 0){
    return 'error';
  }else{
    const random = Math.random() * (max - min) + min;
    return random.toFixed(after);
  }
}
reditTemereFractus(1, 10, 3);
