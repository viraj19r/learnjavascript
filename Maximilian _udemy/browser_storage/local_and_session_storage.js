const userId = "user123";
localStorage.setItem("uid",userId);// stores this key value pair in browsers local storage.
 // it can only be deleted by the user or the browser or javascript,otherwise it will not be deleted.
console.log(localStorage.getItem("uid"));// console the value corresponding to the passed key
sessionStorage.setItem("uid",userId); // stores this key value pair in browsers session storage,it is stored only for an session
// it will be deleted when an tab is closed or window is closed or deleted by javascript,user or browser.


// local and session storage only stores strings(by default their is an toString method is attached with it)
// so to store objects and arrays we need to stringify them into json(as json is of string format)

const obj = {
    name : "john",
    age  : 30,
    hobbies : ["playing","cooking"],
}

localStorage.setItem("userDetails",JSON.stringify(obj));