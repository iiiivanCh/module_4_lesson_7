"use strict"

const doLeapYear = (n, m) => {

  let min;
  let max;

  if (n === m) {
    return console.log('Ошибка, n не должно быть равно m')
  }

  if (n > m) {
    max = n;
    min = m;
  } else {
    min = n;
    max = m;
  }


  let leapYear = [];
  console.log(min);

  for (let i = min; i <= max; ++i) {
    if (i >= -45 && i < -9 ) {
      if (i % 3 === 0) {
        leapYear.push(i);
      }
    }
    if (i > 4 && i <= 1582) {
      if (i % 4 === 0) {
        leapYear.push(i);
      }
    }
    if (i > 1582) {
      if ((i % 4 === 0) && (i % 100 !== 0) || (i % 400 === 0)) {
        leapYear.push(i);
      }
    }
  }

  console.log(leapYear);
}


doLeapYear(-100, 2100);
