//! closure

function counter() {
    let count = 0;
    const child = () => {
    count++;
    console.log(count);
};
return child;
}
const a = counter();
const b = counter();
a();
counter 


// this key word / object
console.log("this", this);

let user = {
    name: "john".
    getNmae() = {
        console.log(this);
    },
};
user.getName();
