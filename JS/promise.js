//! promise
// states
// pending
// fulfilled
// rejected

//const { reject } = require("async");

console.log("start");

//const promise = new Promise((resolve, reject) => {
  //  setTimeout(() => {
        //resolve({messgae: "success response"});
    //    reject({messga: "error response"})
    //}, 2000);
//});

//console.log(promise);
// const promise = new Promise((resolve, reject) => {
   // setTimeout() => {
        //resolve({messgae: "success response"});
       // reject({messga: "error response"})
    //}, 2000);
//});

//console.log(promise);
//promise.then((data) => {
  //  console.log(data);
//})
//.catch((error) => {
  //  console.log(error);
//})
//.finally(() => {
  //  console.log("finally");
//});)

//const promiseFunction = () => {
    //return new Promise((resolve, reject) =>{
        //setTimeout(() => {
            //reject({message: "Error response"});
        //}, 2000);
    //});
//};

// const promise = promiseFunction()
// promise.then()
//promiseFunction()
// .then((data))






const getUser = () => {
    return new Promise ((resolve, reject) => {
        let error = false;
        setTimeout(() => {
            if (error) {
                reject ({message : "user fetched failed"});
            } else {
                resolve ({
                    _id: "1",
                    name: "john",
                    email: "johndoe@gmail.com",
                });
            }
        }, 2000);
    });
};

// get posts
const getPost = (userId) => {
    return new Promise((resolve, reject) => { 
    let error = true
    setTimeout(() => {
        if (error) {
            reject ({message: "post fetch failed"});
        } else {
            resolve([{_id: "101", title: "Post title", userId}]);
        }
        }, 2000);
    });
    };


getUser()
.then((data) =>{
    console.log(data);
})
 .catch((error) => {
    console.log(error)
 })



//? async await
async function test() {
    try{
// console.log("hello")
const user = await getUser();
if (!user) {
throw new Error("user not found");
}
console.log(user);
const posts = await getPost(user._id)
console.log(posts);
const comments = await getComments(post[0]._id);
console.log(comments);
} catch (error) {
    console.log(error);
} finally {
    console.log("finally");
}
}
//test();
//console.log("end"); 

// network req.
// fetch()
//! promise chain
fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => {
    console.log(response);
    return response.json();
})
.then((posts) => {
    console.log(posts);
})
.catch((error) => {
    console.log(error);

})


const fetchPosts = async() => {
    try {const response = await fetch 
        ("https://jsonplaceholder.typicode.com/posts/10",
    );
    const data = await response.json();
    console.log(data);

    const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${data.id}`, 
);
const comments = await res.json();
console.log(comments);
}
    catch(error) {
        console.log(error);
    }
}

