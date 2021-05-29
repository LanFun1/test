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

