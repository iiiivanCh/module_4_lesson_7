"use strict"


function doGenerator(total, n, m, index) {

  let min;
  let max;

  if (n === m) {
    return console.log('Ошибка, n не должно быть равно m');
  } else {
    min = (n < m) ? Math.ceil(n) : Math.ceil(m);
    max = (n < m) ? Math.floor(m) : Math.floor(n);
  }

  const result = Array(Math.round(total)).fill(0).map(() => Math.floor((Math.random() * (max - min + 1)) + min));

  result.map((_,i, ) => {
    if (result[i] % 2 !== 0 && index === 'even') {
      result[i] += 1;
      if (result[i] > max) {
        result[i] -= 2;
      }
      return;
    }
  });

  result.map((_,i,) => {
    if (result[i] % 2 === 0 && index === 'odd') {
      result[i] -= 1;
      if (result[i] > max) {
        result[i] += 2;
      }
      return;
    }
  });
  console.log(result);
}

doGenerator(10, 3000, 3000, 'odd')