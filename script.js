'use strict'
let money = 123000;
let income = "freelance";
let addExpenses = "Internet,Taxi,Food,Communal Apartment";
let deposit = true;
let mission = 1000000;
let period  = 7;


console.log(typeof money);
console.log(typeof deposit);
console.log(typeof income);
console.log(addExpenses.length);
console.log("Период равен ", period, " месяцев");
console.log("Цель заработать ", mission, " рублей");
addExpenses = addExpenses.toLowerCase();
addExpenses = addExpenses.split(',');
console.log(addExpenses);


let budgetDay = money / 30;
console.log('budgetDay: ', budgetDay);
////////////////////////////
money = prompt("Ваш месячный доход?");
addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
deposit = confirm("Есть ли у вас депозит в банке?");
let costs = [];
for(let i = 0; i < 4; i++){
  if(i<2)
  {
    costs[i] = prompt("Введите обязательную статью расходов?");
  }
  else{
    costs[i] = prompt("Во сколько это обойдется?");
  }
}
let budgetMonth = +money - (+costs[2]+(+costs[3]));
console.log('budgetMonth: ', budgetMonth);
console.log(Math.ceil(mission/budgetMonth));
budgetDay = Math.floor(budgetMonth / 30);
console.log('budgetDay: ', budgetDay);
if(budgetDay >= 1200 ){
  console.log("У вас высокий уровень дохода");
}
else if(budgetDay >= 600){
  console.log("У вас средний уровень дохода");
}
else if(budgetDay >= 0){
  console.log("К сожалению у вас уровень дохода ниже среднего");
}
else{
  console.log("Что то пошло не так");
}