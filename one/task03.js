"use strict"


const doGenerator = (total, n, m, index) => {

  let min;
  let max;

  if (n === m) {
    return console.log('Ошибка, n не должно быть равно m')
  }

  if (n > m) {
    max = Math.floor(n);
    min = Math.ceil(m);
  } else {
    min = Math.ceil(n);
    max = Math.floor(m);
  }

  let result = Array(total).fill(0);

  result.forEach((_, i) => result[i] = Math.floor((Math.random() * (max - min + 1)) + min));

  result.forEach((_, i) => {
    if (result[i] % 2 !== 0 && index === 'even') {
      result[i] += 1;
      if (result[i] > max) {
        result[i] -= 2;
      }
      return;
    }
    if (result[i] % 2 === 0 && index === 'odd') {
      result[i] -= 1;
      if (result[i] < min) {
        result[i] += 2;
      }
    }
  });
  console.log(result);
}

doGenerator(100, -1000, 2000, 'even');