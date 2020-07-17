const buttons = document.querySelectorAll("button");

const buttonClickHandler = () => {
  alert("button clicked");
};
const anotherButtonClickHandler = () => {
  console.log("Hi there");
};
// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHandler;  // now only this function will be called first one will not, it is just overridden
// that is why we use addEventListener

// button.addEventListener("click", buttonClickHandler); // for single button

// setTimeout(() => {
//   button.removeEventListener("click",buttonClickHandler);
// }, 2000);

buttons.forEach(btn =>{ // for both buttons
    btn.addEventListener("click",buttonClickHandler);
})
