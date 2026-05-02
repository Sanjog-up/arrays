






// let person = new Object(){ email: ham.com };;
let user = {
    email: "johne@gmail.com",
    is_verified: false,
    password: "123456",
}



//? assign new properties
user.name = "John";
user["address"] = "ktm, Nepal"
// person.email = "john@gmail.com"

//? accessimg properties
//! dot notation
console.log(user.name);
let user_name = user.name;
// console.log(user_name);

//! bracket notation
console.log(user["password"]);

// console.log(user["is verified"]);

let key = "is_verified";

console.log(user[key]);
console.log(user.key); //undefined

user[key] = true;

//! modify properties
user.password = "password";

console.log(user);
 let user1 = user;

 // console.log(user1 === user);

 let x = 10;
    let y = x;
    y = 90;
    console.log(x, y);

    user1.name = "Jane";
    console.log(user1, user);

    // main { x:10 , y:10, user:&123, user1:&123};
    // heap {&123 : {name:", pass:"}}

    // letobj = {};
    // if (obj) {
    // console.log("run");
    // }

    // ternary op 
    let age = null;
    console.log(age ? age : "age is not defined");

    //nullish op / null safety
    console.log(age ?? "age is not defined");

    let user2 = {
        name: "user 2",
        address: {
            city: "ktm",
            street: "123",
        },
    };

    //! dot
    console.log(user2.name);
    console.log(user2.address.city);

    //! bracket
    console.log(user2["name"]);
    console.log(user2["address"]["city"]);

    let user3 = {
        name: "user3",
        
    };
//! dot
if (user3.address) {
    if (user.address.city) {
        console.log?(user.address.city);
    } else {
        console.log("city is not defined");
    }
}

//! optional chaining
console.log(user3?.address?.city ?? "city is not defined");

//? delete properties
delete user.name;
user3.greet();