"use strict"


const doGenerator = (total, n, m) => {

  const min = (n < m) ? Math.ceil(n) : Math.ceil(m);
  const max = (n < m) ? Math.floor(m) : Math.floor(n);

  const result = Array(Math.round(total)).fill(0).map(() => Math.floor((Math.random() * (max - min + 1)) + min));

  console.log(result);
}

doGenerator(5, -10.568, 10.909090909);

// Я не понимаю как применить деструктуризацию при определении min max, ведь нет массива или списка, да еще все одной строкой