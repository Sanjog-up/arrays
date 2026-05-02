// console.log(x); //
// var x = 40;

// hoist();
//  function hoist() {
// console.log("hoist");
// }
// var hoist = () => {
//     console.log("hoist");
// };

//? es6
// let const
// ``
// arrow function
// default parameter
// class
// promise
// async/await
// enhanced object literal
//let name = "john";
// let user = {
    // name,
// console.log(user);
// destructuring
// object
 let user = {
name: "john",
email : "jonh@gamil.com",
pass: "1234567",
};
// let {email, name, pass} = user;
// let { email: user_email} = user;
//console.log(user);

//? array
const arr = [12, 23];
const [a, b] = arr;
console.log(a, b);

//! spread operator (...)

let user2 = {...user};
console.log(user2);
const numbers = [...arr, 23, 43];
console.log(numbers);

// const user3 = {
//     name: "hari",
// }
// let user4 = {...user, ...user3};
// console.log(user4);

//! rest operator (...)
// let {name, email, pass, ...rest} = user;
// console.log(name, rest);

// const numbers = [42, 42, 44];
// let [i, j, ...y]= numbers;
// console.log(i, j, y);

// const add = (...numbers) => {
// //    console.log(numbers);
//    let sum = numbers.reduce((acc, value) => {
//     return (acc += value);
//    }, 0);
//    return sum;
// };
// console.log(add(12, 3, 5,3));
// console.log(add(12, 3));

// optional chaining
// nullish

let username = "ram"