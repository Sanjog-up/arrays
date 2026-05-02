"use strict";
let str = "Hello";
console.log(str);
let num;
num = 12;
// num = "hello";
let isLoggedIn = true;
isLoggedIn = false;
let a1 = null;
let b1 = undefined;
//! any
// let c: any;
// c = 5;
// c = "any type";
// console.log(c.toUpperCase());
//! unknown
// let d : unknown;
// d = 34;
// d = "unknown type";
// if(typeof d === "string") {
//     console.log(d.toUpperCase());
// }
//! array
let number = [1, 2, 3, 5];
let string = ["1"];
number.push(23);
// number.push("23")
//! tuple
let tuple = [1, "1", true];
//! object
let user = {
    name: "John",
    email: "john@gmail.com",
    age: 23,
    password: "12345",
};
//! interface
// interface IUser {
//      name: string,
//     email:string,
//     age?: number, //1 optional property
//     password: string,
// }
// let user1: IUser = {
//      name: "John",
//     email: "john@gmail.com",
//     age: 23,
//     password:"12345"
// };
// let user2: IUser = {
//      name: "John",
//     email: "john@gmail.com",
//     password:"12345"
// }
//! enum
//? named constant
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["SUPER_ADMIN"] = "SUPER ADMIN";
    Role["USER"] = "USER";
})(Role || (Role = {}));
console.log(Role.ADMIN);
console.log(Role.SUPER_ADMIN);
let user1 = {
    name: "John",
    email: "john@gmail.com",
    age: 23,
    password: "12345",
    role: Role.ADMIN,
};
let users = [
    {
        name: "hssj",
        email: "hsjs",
        password: "jdn",
    },
    {
        name: "hsjd",
        email: "shjs",
        password: "jsks",
    },
];
users.map((user) => {
    console.log(user.email);
});
let user_acc = {
    fullName: "",
    username: "",
    email: "",
    password: "",
};
//! function
const add2 = (a, b) => {
    return a + b;
};
console.log(add2(12, 3));
//! voide
let greet = (name) => {
    console.log(name);
};
//! never
const never = () => {
    throw "new error";
};
const add1 = (...numbers) => {
};
//! unionc[ | ]
let id = 12;
id = "2";
let b = {
    name: '',
    email: ""
};
const add = (a, b) => {
    return a + b;
};
console.log(add(12, 3));
let c = {
    name: "",
    email: "",
};
let d = {
    email: "",
    name: ""
};
;
let e = {
    e: "",
    f: "",
};
//! type literal
let res_status;
let Stays;
res_status = "success";
//! class
class person {
    name;
    email;
    password;
    age;
    constructor(name, email, pass, age) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.password = pass;
    }
}
// interface INBox {
// value: number }
// interfcae IOBox {
// value:{
x: number;
y: number;
//}}
let str_box = {
    value: "",
};
let num_box = {
    value: {
        x: 12,
        y: 23,
    },
};
// type IF = <T>(name:T) => T
const identity = (a) => {
    return a;
};
console.log(identity(12));
console.log(identity("12"));
//! utility types
