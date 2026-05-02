//! Array

let numbers = [1, 2, 3, 4];
let arr = new Array(1, 2, 3, 4);
console.log(numbers);
console.log(arr);
// readinng element
let first = numbers[0];
console.log(first);
// console.log(numbers[1]); 
// console.log(numbers[3]);

//* adding new elements
//? to end index
//?push => length
let x =numbers.push(5);
console.log(x);

//?from start index
//? unshift
numbers.unshift(23, 24);
console.log(numbers);

//* removing elements
//?arr.pop() => last element

const el = numbers.pop();
console.log(el);
console.log(numbers);
//?from start
//? arr.shift() => first element

console.log(numbers.shift());
console.log(numbers.shift());

console.log(numbers.length);
numbers.push(56);
console.log(numbers);
console.log(numbers[numbers.length - 1]);
// console.log(numbers[-1]);
//console.log(numbers.at(-1));

//* indexof => index / -1
console.log(numbers.indexOf(3));

//* includes => boolean
console.log(numbers.includes(340));
console.log(numbers.lastIndexOf(3));

console.log(numbers.concat([67, 56]));
console.log(numbers.join("-"));
//console.log(numbers);
//* arr.splice(start_index, delete_count, ...items)
let y = numbers.splice(2, 0, 12, 34);
console.log(numbers.splice(1, 2, 100, 200));

console.log(numbers);

let user2 = {
    name: "user 2",
    address: {
        city: "ktm",
        street: "123",
    },  
};
const key = Object.keys(user2);
console.log(key);
const values = Object.values(user2);
console.log(values);
const entries = Object.entries(user2);
console.log(entries);
console.log(Object.fromEntries(entries));


//! for in 
for (key in user2) {
    console.log(key, ":", user2[x]);
}
//! for of 
for (value of numbers) {
    console.log(value);
}
for (value of "hello") {
    console.log(value);
}


