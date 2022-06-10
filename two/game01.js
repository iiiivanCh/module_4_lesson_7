"use strict"


const doGame = () => {
  const resultMachine = Math.floor((Math.random() * 101));
  let userNumber

  alert("Добро пожаловать в игру - УГАДАЙ ЧИСЛО");
  userNumber = prompt("Введите число от 1 до 100");

  if (userNumber === "null" || userNumber === null) {
    alert("До свидания");
    return;
  }
  if (userNumber === "") {
    alert("Вы ничего не добавили. До свидания");
    return;
  }
  userNumber = Number(userNumber);

  while (!Number.isInteger(userNumber) || userNumber < 1 || userNumber > 100) {
    userNumber = prompt("Вы ввели не натуральное число от 1 до 100, пожалуйста, повторите попытку");

    if (userNumber === "null" || userNumber === null) {
      alert("До свидания");
      return;
    }
    if (userNumber === "") {
      alert("Вы ничего не добавили. До свидания");
      return;
    }
    userNumber = Number(userNumber);
  }

  while (resultMachine !== userNumber) {
    if (userNumber > resultMachine) {
      userNumber = prompt("Меньше!");

      userNumber = Number(userNumber);

      while (!Number.isInteger(userNumber) || userNumber < 1 || userNumber > 100) {
        userNumber = prompt("Вы ввели не натуральное число от 1 до 100, пожалуйста, повторите попытку");

        if (userNumber === "null" || userNumber === null) {
          alert("До свидания");
          return;
        }
        if (userNumber === "") {
          alert("Вы ничего не добавили. До свидания");
          return;
        }
        userNumber = Number(userNumber);
      }
    }
    if (userNumber < resultMachine) {
      userNumber = prompt("Больше!");

      userNumber = Number(userNumber);

      while (!Number.isInteger(userNumber) || userNumber < 1 || userNumber > 100) {
        userNumber = prompt("Вы ввели не натуральное число от 1 до 100, пожалуйста, повторите попытку");

        if (userNumber === "null" || userNumber === null) {
          alert("До свидания");
          return;
        }
        if (userNumber === "") {
          alert("Вы ничего не добавили. До свидания");
          return;
        }
        userNumber = Number(userNumber);
      }
    }
    if (userNumber === resultMachine) {
      alert("Правильно!");
      return;
    }
  }
}

doGame();