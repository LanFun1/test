'use strict'
let mission = 1000000;

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
let money;
let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый п ериод через запятую");
let deposit = confirm("Есть ли у вас депозит в банке?");
let costs = [];

for(let i = 0; i < 4; i++){
  if(i<2)
  {
    costs[i] = prompt("Введите обязательную статью расходов?");
  }
  else{
    costs[i] = prompt("Во сколько это обойдется?", 123000);
  }
}

let start = function() {
  do {
    money = prompt("Ваш месячный доход?");
  }
  while(!isNumber(money));
};

start();

function getExpensesMonth(){
  while(true){
    if(isNumber(costs[2]) && isNumber(costs[3])){
      return costs[2]+costs[3];
    }
    else{
      costs[2] = prompt("Во сколько это обойдется?");
      costs[3] = prompt("Во сколько это обойдется?");
    }
  }
}

console.log(getExpensesMonth());

function getAccumulatedMonth(money, cost, cost1){
  let budgetMonth = money - (cost+cost1);
  return budgetMonth;
}

let accumulatedMonth = getAccumulatedMonth(money, costs[2], costs[3]);

function getTargetMonth(accumulatedMonth, mission){
  if(Math.ceil(mission/accumulatedMonth >= 0))
  {
    return Math.ceil(mission/accumulatedMonth);
  }
  else{
    return "Цель не будет достигнута";
  }
}

let budgetDay = Math.floor(accumulatedMonth / 30);

function showTypeOf(data){
  return typeof(data);
}
function getStatusIncome(budgetDay){
  if(budgetDay >= 1200 ){
    return("У вас высокий уровень дохода");
  }
  else if(budgetDay >= 600){
    return("У вас средний уровень дохода");
  }
  else if(budgetDay >= 0){
    return("К сожалению у вас уровень дохода ниже среднего");
  }
  else{
    return("Что то пошло не так");
  }
}
console.log('budgetDay: ', budgetDay);
console.log(getTargetMonth(accumulatedMonth, mission));
console.log(showTypeOf(money));
console.log(showTypeOf(addExpenses));
console.log(showTypeOf(costs));
console.log(showTypeOf(accumulatedMonth));
console.log(addExpenses = addExpenses.split(','));
console.log(getStatusIncome(budgetDay));

