// const para = document.getElementById('main_p');

// para.textContent = 'hello world';
// para.style.color =  "yellow";
// para.style.backgroundColor = "black";

// const para1 = document.querySelector("p");

// para1.style.color = "blue";

const para2 = document.getElementsByTagName("p");
para2[0].style.color = "red";

para2[0].textContent = "Welcome";
para2[0].textContent = "Your " + para2[0].textContent;

// child traversing
const uList = document.querySelector("ul");
uList.children[0].style.color = "yellow";      // children only selects elements
// uList.firstChild.style.color = "yellow";     // same as above
uList.childNodes[3].style.color = "blue";   // here childNodes also selects text nodes, array formed is [text,li,text,li,text,li]

// parent traversing
const var1 = document.querySelector("li");
 var1.parentElement.style.backgroundColor = "green"; // parent(ul) now has background color green

 // to get another ancestor after parent we use
 var1.closest("body").style.backgroundColor = "grey";

 // selecting sibling element
 uList.previousElementSibling.style.backgroundColor = "yellow";