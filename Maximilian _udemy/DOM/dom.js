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

 const section = document.querySelector("section");
  const button = document.querySelector("button");
 section.className = "red-color";
button.addEventListener("click",() => {
//  if(section.className === "red-color visible"){
//      section.className = "red-color invisible";
//  }else {
//      section.className = "red-color visible";
//  } or
section.classList.toggle("invisible");
});
 
// adding elements via html in code
section.innerHTML = "hello world "; // innerHTML replaces all code inside with the new one(it just swap up everything)------ not recommended for big projects
// uList.innerHTML = uList.innerHTML + '<li> new one </li>';// innerHTML is only useful when we want to change all the html code, its not good if we want to add something to our existing html code
// adding element via insertAdjacentHTML
// uList.insertAdjacentHTML("beforeend","<li> new one </li>");
// creating a new javascript element and append it to end of list
const newLi = document.createElement("li");
// uList.appendChild(newLi); 
newLi.textContent = "Hi am also new one";
// uList.append(newLi);  // to insert after use append
// uList.prepend(newLi);  // to insert after
//  uList.lastElementChild.before(newLi);// to insert before last element
//  uList.firstElementChild.replaceWith(newLi); // replace with first element
const secondLi = uList.children[1];
secondLi.insertAdjacentElement("afterend",newLi); // same as insertAdjacentHTML
