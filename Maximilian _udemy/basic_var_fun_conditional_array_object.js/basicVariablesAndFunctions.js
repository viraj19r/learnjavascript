let var1; // variable declared--- global scope
var1 = 1; //variable initialized
let var2 = 2; //variable declared and initialized

const constVar = 2; //constant variable
const var6 = 2 + (3 * 3) / 1 + 5; //16

let var3 = "a string" + "a string" + `a string`;
let var4 = `${var1} 10 string`; //template literal
let var5 = var1 + "10 string";
let var7 = "string should be " +
               "concatenated" +
               "in this way";


//Functions:
function add(num1, num2) {
  //create a function
  const result = num1 + num2; // result -- local or block scope
  return result;
}

console.log(add(3,5)); // 8 call function


function first(){
    console.log("first function");
}

function second(name){
    console.log(name);
}
first();
second("second function");


function third(string1,string2,string3){
    return string1 + string2 + string3;
}
console.log(third("one","two","three"));


var userInput = 10;
var currentResult = 5;

function add1(){
    currentResult += userInput;
      return currentResult;
}
console.log(add1());

 