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