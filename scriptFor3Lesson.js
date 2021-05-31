'use strict'
let lang = prompt("Введите язык: ru or en");
let daysOfweek = [];
daysOfweek['ru'] = ['Пн','Вт','СР','Чт','Пт','Сб','Вс'];
daysOfweek['en'] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

if(lang === 'ru'){
  console.log(daysOfweek['ru']);
}
else if(lang === 'en'){
  console.log(daysOfweek['en']);
}
switch(lang){
  case 'ru':
    console.log(daysOfweek['ru']);
    break;
  case 'en':
    console.log(daysOfweek['en']);
    break;
  default:
    console.log("Что-то пошло не так!");
    break;
}

console.log(daysOfweek[lang]);
let namePerson = prompt("Введите ваше имя!");
let check1 = namePerson === 'Артем' ? 'Директор' : '';
let check2 = namePerson === 'Максим' ? 'Преподаватель' : '';
let check3 = namePerson !='Максим' && namePerson != 'Артем' ? 'Студент' : '';

console.log(check1, check2, check3);
