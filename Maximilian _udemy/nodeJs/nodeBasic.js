const userName = "Max";

console.log(`Hi ${userName}!`); // run in terminal using command - node nodeBasic.js
const fs = require("fs"); // inbuilt api to interact with filesystem
fs.writeFile("user.txt", "username=max", (err) => { // it will create a file of type text and of username = user
  if (err) {
    console.log(err);
  } else {
    console.log("created a file");
  }
});fs.writeFile("user.html","<h1>Hii there </h1>",err => {  // create an html file
  if(err){
    console.log(err);
  }else{
    console.log("created an html file");
  }
})

