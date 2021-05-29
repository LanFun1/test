let num = 266219; 
let result = 1;
let digit = "";
for(let i = 0; i<6; i++){
  digit = num.toString()[i];  
  result *= +digit; 
}

console.log('result: ', result);

result = result ** 3;
console.log('result: ', result);

let length = result.toString();
console.log(+length[0]+(+length[1]));
