//! arithmetic op. => +, -, *, /, **
console.log(2+5); // 7
let s = 12 - 3;
let b = 23
let c = 34
console.log(b - c);
console.log(2 ** 4); // 2 pow 4
let e = b - c
b = b + c

//! assignment op. => =, +=, -=, *=, /=, **=
let d = 34;
b += c; // b = b + c
b -= 10 // b = b - 10

//! comparison op. => == , === , !=, !==, >, <, >=, <=

// console.log(12 > 10); //
// console.log(12 >= 12); //

let f = 12;
let g = "12";
console.log(f == g); // 
console.log(f === g); //

//! logical op. => AND (&&) , OR (||) , NOT (!)

let x = true;
let y = false;
console.log(x && y); // false
console.log(x || y); // true
console.log(!x);// => false 

//! typed op.
console.log(typeof b); 
console.log(typeof "jfgd");
console.log(typeof x);
console.log(typeof b === "number"); // true

let z = null;

console.log(typeof z);

console.log(2 & 3)

//unary
let num = 1
console.log(num); // 1
// pre
console.log(++num); // 2
// post
console.log(num++); // 2
console.log(num);// 3

if(num == 3){
  //
  console.log("num is 3");
} else {
    console.log("num is not 3");
    //
}

//! ternary op consition ? statement_a : statement_b
let isNum3 = num === 3 ? console.log("num is 3") : console.log("num is not 3");

let age = 17;
let canVote = age >= 18 ? "can vote" : "cannot vote";
console.log(canVote);

 canVote = null
if (age >= 18) {
    canVote = "Can vote";
} else {
    canVote = "Cannot vote";
}

 //! type conversion
 //! implicit / coercing  auto conversion of data types
    console.log(2 + "3");23
    console.log("5" - 2);3
    console.log("a" - 3);NaN

//? explicit
console.log((Boolean("abc"));
console.log(Number("123");
console.log(Number("abc");
console.log(String(123));
console.log(String(true));
let l = 123;
console.log9l.toString));
console.log(parseInt(123.87));
console.log(parseFloat(123.65));

let str = "Hello World"
console.log(str.length);
console.log(str.charAt(0));
console.log(str.toLocaleUpperCase());
console.log(str.endsWith("d");
console.log(str.includes("Hello"));

let strNum="12345"
console.log(strNum.padStart(5, "0"));
console.log(str.split(" "));
console.log(str.replace("_", "-")
console.log(str.indexOf("o"));//4));
console.log(str.lastIndexOf("o"));//

 //! truly & falsy values
 // falsy
 //? 0, ",  undefined, -0, null, NaN, false"
 //
 
 console.log(Boolean(0)); // false
    console.log(Boolean(""));
    console.log(Boolean(undefined));
    console.log(Boolean(-0));
    console.log(Boolean(null));
    console.log(Boolean(NaN));
    console.log(Boolean(false));    
 let condition = 0:
 ); // 0

 if (condition) {
    console.log("run");
 }