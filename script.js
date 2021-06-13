'use strict';

alert("Угадай число от 1 до 100");

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

function random() {
  return Math.floor(Math.random() * 100);
}




function startGame(){
  let userNumb = prompt("Введите число!");
  let number = random();
  console.log('number: ', number);

  function checker(){
    if(isNumber(userNumb))
    {
      if(+userNumb === number)
      {
        console.log("Поздравляю, Вы угадали!!!");
        return;
      }
      else if(userNumb > number)
      {
        userNumb = prompt("Загаданное число меньше");
        checker();
      }
      else if(userNumb < number)
      {
        userNumb = prompt("Загаданное число больше");
        checker();
      }
    }
    else if(userNumb === null){
      console.log("Игра окончена");
      return;
    }
    else{
      userNumb = prompt("Введите число!");
      checker();
    }
  }
  checker();
} 

startGame();

