function findFirst(array, func) {
  for (let i = 0; i < array.length; i++) {
    if (func(array[i])) {
      return array[i];  
    }
  }
  return undefined;
}
console.log(findFirst([1, 2, 3, 4], num => num % 2 === 0)); 
console.log(findFirst([1, 2, 3, 4], num => num > 5));
console.log(findFirst([1, 2, 3, 4], num => num < 0));
console.log(findFirst([1, 2, 3, 4], num => num === 3));


function frankenSplice(array, array1, index) {
let result = [...array1];
result.splice(index, 0, ...array) ;
return result;
};
console.log(frankenSplice([1, 2, 3], [4, 5], 1));
console.log(frankenSplice([2, 3, 6], [1, 3, 7], 2));

function pyramid(symbol, number, boo){
  let rows = [];
  for(let i =1; i<= number; i++){
    const space = ' '.repeat(number - i);
    const char = symbol.repeat(2 * i - 1);
    rows.push(space + char);
  };
  if(boo) rows.reverse();
  return '\n' + rows.join('\n') + '\n';
}
console.log(pyramid('*', 9, true));





function getAverage(array){
  let sum = 0;
  for(let i = 0; i< array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
};

function getGrade(scores){
if(scores === 100) {
  return "A+";
}else if(scores >= 90) {
  return "A";
} else if(scores >= 80) {
  return "B";
} else if(scores >= 70) {
  return "C";
} else if(scores >= 60) {
  return "D";
} else {
  return "F";
}
}
function hasPassingGrade(scores){
  if(getGrade(scores) !== "F" ){
    return true;
  } else{
    return false;
  }
}
function studentMsg(array, scores){
  if(hasPassingGrade(scores)){
return `Class average: ${getAverage(array)}. Your grade: ${getGrade(scores)}. You passed the course.`
} else{
  return `Class average: ${getAverage(array)}. Your grade: ${getGrade(scores)}. You failed the course.` 
}
}
console.log(studentMsg([90, 80, 70], 85));
console.log(getGrade(93));
console.log(getAverage([20,90,78]));
console.log(hasPassingGrade(90));





const inventory = [];

function findProductIndex(pname){
  const lower = pname.toLowerCase();

  for(let i = 0; i< inventory.length; i++){
    if(inventory[i].name.toLowerCase() === lower){
      return i;
    }
  } return -1;
}
function addProduct({name, quantity}){
  const lowern = name.toLowerCase();
  const index = findProductIndex(lowern);
if(index !== -1){
  inventory[index].quantity += quantity;
  console.log(`${inventory[index].name} quantity updated`)
} else {
  inventory.push({
    name: lowern, 
    quantity: quantity});
  console.log(`${lowern} added to inventory`);
};
};

function removeProduct(name, quantity){
  const lowern = name.toLowerCase();
  let index = -1;
  for(let i = 0; i< inventory.length;i ++) {
    if(inventory[i].name.toLowerCase() === lowern) {
      index = i;
      break;
    } 
  }
  if(index === -1) {
    console.log(`${lowern} not found`);
    return;
  } 
  if(quantity > inventory[index].quantity){
    console.log(`Not enough ${inventory[index].name} available, remaining pieces: ${inventory[index].quantity}`);
    return;
  }
  
    inventory[index].quantity -= quantity;
    console.log(`Remaining ${inventory[index].name} pieces: ${inventory[index].quantity}`);
  
  if(inventory[index].quantity === 0){
    inventory.splice(index, 1);
  }
}
console.log(inventory);
addProduct({name: 'Apple', quantity: 10});
console.log(findProductIndex('Banana'));
removeProduct('Apple', 5);



function uniteUnique(...arrays) {
   const seen = new Set();
   const result = [];
  for(const array of arrays){
    for (const value of array){
      if(!seen.has(value)){
        seen.add(value)
        result.push(value);
      }
    }
  } return result;
}
console.log(uniteUnique([1,3,5], [1,2,4], [5,4,6]));

function generatePassword(length){
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
let password = "";
for(let i =0; i< length; i++){
  const randomIndex = Math.floor(Math.random() * chars.length);
   password += chars[randomIndex]
   } return password;
}
const password = generatePassword(8);

console.log(`Generated password: ${password}`);

function sumAll(array){
  let min = Math.min(array[0], array[1]);
  let max = Math.max(array[0], array[1]);
  let sum = 0;
for(let i = min; i <= max; i++) {
  sum += i;
} return sum;
}
console.log(sumAll([1, 4]));