# learnjavascript

## * [course link](https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/)



# NOTES 

## what are functions ?
functions are code on demand
functions can take parameters(arguments) and returns a value.
functions can be called multiple times(with different arguments)
### Parameter vs arguments
Parameters are these variables which we specify between parentheses when defining a function.
Arguments are values we pass to a function when calling that function.
### what is method ?
If we store a function in an object, then the function is said as "method"(a function attached to an object)

| Function declaration/statement  | Function expression            | 
|---------------------------------|--------------------------------|
|  function multiply (a,b) {    | const multiply=function(a,b){  |   
| return a*b;    }  |return a*b;   }   |   
| Hoisted to top,can be declared anywhere in the file(also after its use)  |hoisted to top but cannot initialized/defined(can't be declared after its use)   |


#### we will store functions in variables(anonymous function) if we have to use it only once. we will directly create the anonymous function(giving it a name) where we want to use it(as we use it once)

### arrow function syntax
``` () => {....}  ``` parenthesis is  mandatory if we are not passing any parameter, but if we are passing one parameter than we can omit parenthesis.
if we have only one expression then we can omit the curly braces.
function return an object:``` const loadPerson = pName => ({name: pName }); ```
here extra parenthesis are required if we not use arrow function will think that it is an function body.
#### function callback
calling a function by passing it as a parameter to another function.