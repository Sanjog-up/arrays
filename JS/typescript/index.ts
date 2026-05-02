let str: string = "Hello";
console.log(str);

let num: number;
num = 12;
// num = "hello";

let isLoggedIn: boolean = true;
isLoggedIn = false;

let a1: null = null;

let b1: undefined = undefined;

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
let number: number[] = [1, 2, 3, 5];
let string: Array<string> = ["1"];
number.push(23);
// number.push("23")

//! tuple
let tuple: [number, string, boolean] = [1, "1", true];

//! object
let user: {
  name: string;
  email: string;
  age: number;
  password: string;
} = {
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
enum Role {
  ADMIN = "ADMIN",
  SUPER_ADMIN = "SUPER ADMIN",
  USER = "USER",
}
console.log(Role.ADMIN);
console.log(Role.SUPER_ADMIN);

interface IUser {
  name: string;
  email: string;
  age?: number; //1 optional property
  password: string;
  role: Role;
}
let user1: IUser = {
  name: "John",
  email: "john@gmail.com",
  age: 23,
  password: "12345",
  role: Role.ADMIN,
};

let users: { name: string; email: string; password: string }[] = [
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

interface ILogin{
email: string;
password: string;
}

interface IReg extends ILogin {
    username: string;
    fullName: string;
}

let user_acc: IReg = {
    fullName: "",
    username: "",
    email: "",
    password: "",
};

//! function
const add2 = (a:number, b:number): number => {
  return a+b;
};
console.log(add2(12, 3));

//! voide
let greet = (name: string): void => {
  console.log(name);
};

//! never
const never = (): never => {
  throw "new error";
};
const add1 = (...numbers: number[]) => {

};


//! unionc[ | ]
let id: number | string = 12;
id = "2";

//! type [type alias]
type A = {
  name: string;
  email: string;
};
let b:A = {
  name: '',
  email: ""
}


type addF = (x:number, y: number) => number;
const add: addF = (a, b) =>{
  return a + b;
};
console.log(add(12, 3));


//! intersection [ & ]
type B = {
  name: string;
};

type C = A & B;
type D = A | B;
let c: C = {
  name: "",
  email: "",
};

let d: D = {
  email: "",
  name: ""
}

// diff between type and Interface
interface E {
  e: string;
}

interface E{
  f: string;
};

let e:E = {
  e: "",
  f: "",
};

type F = {
  e: string;
};


//! type literal
let res_status: "success" | "fail" | "error";
type Status = "success" | "fail" | "error";
let Stays: Status;
res_status = "success";

//! class
class person {
  public name: string;
  protected email:string;
  private password: string;
  age: number;
  constructor(name: string, email: string, pass:string, age: number) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.password = pass;
  }
}

//generic type {

interface IBox<T> {
  value: T;
}
// interface INBox {
// value: number }
// interfcae IOBox {
// value:{
x: number;
y: number;
//}}
let str_box: IBox<string> = {
  value: "",
};

let num_box: IBox<{x:number, y: number}> = {
  value: {
    x: 12,
    y: 23,
  },
};

// type IF = <T>(name:T) => T
const identity = <T>(a: T):T => {
  return a;
};

console.log(identity<number>(12));
console.log(identity<string>("12"));

//! utility types