'use strict'
let mission = 1000000;




////////////////////////////
let money = +prompt("Ваш месячный доход?", 300000);
let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый п ериод через запятую");
let deposit = confirm("Есть ли у вас депозит в банке?");
let costs = [];

for(let i = 0; i < 4; i++){
  if(i<2)
  {
    costs[i] = prompt("Введите обязательную статью расходов?");
  }
  else{
    costs[i] = +prompt("Во сколько это обойдется?", 123000);
  }
}

/* console.log('budgetDay: ', budgetDay);
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
} */

function getExpensesMonth(){
  return costs[2]+costs[3];
}

function getAccumulatedMonth(money, cost, cost1){
  let budgetMonth = money - (cost+cost1);
  return budgetMonth;
}

let accumulatedMonth = getAccumulatedMonth(money, costs[2], costs[3]);

function getTargetMonth(accumulatedMonth, mission){
  return Math.ceil(mission/accumulatedMonth);
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
console.log(getExpensesMonth());
console.log(showTypeOf(money));
console.log(showTypeOf(addExpenses));
console.log(showTypeOf(costs));
console.log(showTypeOf(accumulatedMonth));
console.log(addExpenses = addExpenses.split(','));
console.log(getStatusIncome(budgetDay));

