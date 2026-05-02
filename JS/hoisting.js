//! hoisting
// declaration
// memory creation
// {x : undefined}
// excution
// {x:30}
console.log("hoisting");
console.log(x);
var x = 30;
console.log(x);

//hoist();
//function hoist () {
  //  console.log(y);
 //   var y = 23;
 //   console.log("hoist");
// }

// hoist();
// y();
// 5();

    var y = () => {
        console.log("hoist");
    };
    y();

    console.log(z);
    let z = 23;
console.log(z);
//! temporal deade zone

console.log(a);
const a = () => {
    console.log("hoist");
};
