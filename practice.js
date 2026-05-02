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