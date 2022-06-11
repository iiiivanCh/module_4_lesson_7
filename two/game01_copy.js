"use strict"


const doGame = () => {
  const resultMachine = Math.floor((Math.random() * 101));
  let userNumber

  alert("Добро пожаловать в игру - УГАДАЙ ЧИСЛО");
  userNumber = +prompt("Введите число от 1 до 100");

  if (userNumber === NaN) {
    alert("До свидания");
    return;
  }
  if (userNumber === "") {
    alert("Вы ничего не добавили. До свидания");
    return;
  }

  while (!Number.isInteger(userNumber) || userNumber < 1 || userNumber > 100) {
    userNumber = +prompt("Вы ввели не натуральное число от 1 до 100, пожалуйста, повторите попытку");

    if (userNumber === NaN) {
      alert("До свидания");
      return;
    }
    if (userNumber === "") {
      alert("Вы ничего не добавили. До свидания");
      return;
    }
  }


}

doGame();