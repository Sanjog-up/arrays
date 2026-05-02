// //! function

// // function func_name() {
// // block
// // }

// //! function declaration
// function greet1() {
//     console.log("Hello, World!");
// }
 
// greet2(); 
// //function with input
// //? parameter
// //? arguements
// function greet9(user) {
//     console.log(`Hello, ${user}!`);
// }
// // x =>f(X)=> output

// greet3("Ram");
// greet4("john");
// // greet ();
// // greet();
// // greet ();

// //add 
// // function add(a, b, c) {
// // console.log(a + b + c);
// // }

// //! function with default parameter
// function greet5(user = "Guest") {
//     console.log(`Hello, ${user}!`);
// }
// // function with return type

// function add(a = 0, b = 0){ 
//    // console.log(a + b);
//    // let sum = a + b;
//     // return sum;
//     return a + b;
// }

// let re = 12 + 4;
// let result = add(12, 4); //
// console.log(result);

// //! function expression 
// // let x = 100
// let greet6 = function(name = "Guest") {
// console.log("Hello, World!");
// }
// greet7("John");

// let add = function(a = 0, b = 0) {
//     console.log(a + b);
// }

// // const sub = function(a, b) {
//     return a - b;      
// };

// // let result = sub(12, 3);
// // console.log(result);
// console.log(sub(23,  3)); //
// console.log(sub); 

// //! arrow function
// const sub = (a, b) => {
//     return a - b;       
// };
// console.log(sub(13,  3)); 

function checkOddEven6(number) {
 if (number % 2 === 0) {
     return true;
 } else {
     return false;
 }
}
checkOddEven4(5); // Odd number
checkOddEven5(8); // Even number


    let checkOddEven3 = (number) => {
        if (number % 2 === 0) {
            return true;
        } else {
             return false;
        }}
checkOddEven1(5); // Odd number
checkOddEven2(8); // Even number

const checkOddEven7 = number => {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }}
console.log(checkOddEven7(10)); // Even number

let myNum = 7;
if (checkOddEven7(myNum)) {
  console.log(myNum +"is even");
}
  else {
    console.log(myNum +"is odd");
  }

    const sub = (a, b ) => {
        let r = a - b;
        return r;
    }
    const sub = (a, b) => a - b;
    const double = (a) => a * 2;

    const inNumEven = (num) => num % 2 === 0 ? "true" : "false";


    console.log(sub(23, 3));
console.log(sub(23, 3));

//! callback function
const parent = (func) => {
    console.log("parent");
    console.log(func); //
    func(); //
};

const child = () => {
    console.log("child");
};

//console.log(sub()); 
// console.log(sub);
parent(child); // parent child


