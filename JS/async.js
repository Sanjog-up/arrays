//! sync
// blocking
//! async
// non blocking

//! setTimeout(callback, timer)
// selfTimeout callback, timer and clear timeout
console.log("start");
const timer_id = setTimeout(
  (name, age) => {
    console.log("processing", name, age);
  },
  2000,
  "abc", 
  "12",
); //2 seconds
//clearTimeout(timer_id);
console.log(timer_id);
console.log("end");

// 1-10
// for loop

// setInterval(callback, interval)

let count = 1;

const interval_id = setInterval(() => {
    //console.log("hello")
console.log(count);
if (count === 10 ) {
    clearInterval(interval_id);
}
count++;
}, 100);

// countdown timer
// 1:1:10
console.log("start");

const getUser = (callback) => {
    console.log("fetching");
    setTimeout(() => {
        callback({
        _id: "1",
        name: "john",
        email: "johndoe@gmail.com",
    });
}, 2000);
};

    const getPost = (userId) => {
        setTimeout(() => {
            console.log({userId, title: "avc", id: 1 });
        }, 1000);
    };
    getUser((user) => {
        console.log(user);
    getPost(user._id);
    });
    console.log("end");
