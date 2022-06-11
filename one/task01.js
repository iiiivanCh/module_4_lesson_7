"use strict"

const doGenerator = (total) => {

  const result = Array(Math.round(total)).fill(0).map(() => Math.ceil(Math.random() * 100))

  console.log(result);
}

doGenerator(100);