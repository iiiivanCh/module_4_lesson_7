"use strict"


const doGenerator = (total, n, m) => {

let min;
let max;

  if (n > m) {
    max = n;
    min = m;
  } else {
    min = n;
    max = m;
  };

  min = Math.ceil(min);
  max = Math.floor(max);
  let result = Array(total).fill(0);
  result.forEach((_, i) => result[i] = Math.floor((Math.random() * (max - min + 1)) + min));
  console.log(result);
}

doGenerator(100, -10.568, 10.909090909);