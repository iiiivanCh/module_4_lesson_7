"use strict"


const doGenerator = (total) => {
  let result = Array(total).fill(0);
  result.forEach((_, i) => result[i] = Math.ceil(Math.random() * 100))
  console.log(result);
}

doGenerator(100);




const doGenerators = (total) => {
  let result = [total].fill(0);
  for (let i = 0; i < total; i++) {
    result[i] = Math.ceil(Math.random() * 100);
  }
  console.log(result);
}

doGenerators(100);