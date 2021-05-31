'use strict'
let income = "freelance";
let mission = 1000000;
let period  = 7;

console.log(typeof income);
console.log("Период равен ", period, " месяцев");
console.log("Цель заработать ", mission, " рублей");



////////////////////////////
let money = +prompt("Ваш месячный доход?");
let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
let deposit = confirm("Есть ли у вас депозит в банке?");
let costs = [];
for(let i = 0; i < 4; i++){
  if(i<2)
  {
    costs[i] = prompt("Введите обязательную статью расходов?");
  }
  else{
    costs[i] = +prompt("Во сколько это обойдется?");
  }
}
let budgetMonth = money - (costs[2]+costs[3]);
console.log('budgetMonth: ', budgetMonth);
console.log(Math.ceil(mission/budgetMonth));
let budgetDay = Math.floor(budgetMonth / 30);
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