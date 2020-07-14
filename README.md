# learnJavascript

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

### document object model
`` document.body ``=> Selects the `` <body> `` element node.
`` document.head `` => Selects the `` <head> `` element node
`` document.documentElement `` => Selects the `` <html> `` element node
##### `` document.querySelector(<CSS selector>); ``
Takes any CSS selector (e.g. '#some-id', '.some-class' or 'div p.some-class') and returns the first (!) matching element in the DOM. Returns null if no matching element could be found.
##### `` document.getElementById(<ID>); ``
Takes an ID (without #, just the id name) and returns the element that has this id. Since the same ID shouldn't occur more than once on your page, it'll always return exactly that one element. Returns null if no element with the specified ID could be found.
##### `` document.querySelectorAll(<CSS selector>); ``
Takes any CSS selector (e.g. '#some-id', '.some-class' or 'div p.some-class') and returns all matching elements in the DOM as a static (non-live) NodeList. Returns and empty NodeList if no matching element could be found
##### `` document.getElementsByClassName(<CSS CLASS>); ``
Takes a CSS class g (e.g. 'some-class') and returns a live HTMLCollection of matched elements in your DOM. Returns an empty HTMLCollection if not matching elements were found.
##### `` document.getElementsByTagName(<HTML TAG>); ``
Takes an HTML tag (e.g. 'p') and returns a live HTMLCollection of matched elements in your DOM. Returns an empty HTMLCollection if not matching elements were found.

### .insertAdjacentHtml(position, text);
#### position
A DOMString representing the position relative to the element; must be one of the following strings:
* '``beforebegin``': Before the element itself.
* '``afterbegin``': Just inside the element, before its first child.
* '``beforeend``': Just inside the element, after its last child.
* '``afterend``': After the element itself.
#### text
The string to be parsed as HTML or XML and inserted into the tree.

##### if we edit the html content using the getElementsBy.... then we found the content updated everywhere in the past(previous memory also) but not by the querySelector.... and all other
#### ``` someElement.parentNode.removeChild(someElement) ``` =>  Removes the provided child element (NOT the element on which you call it)

#### ```.trim()``` will remove all extra white spaces and all from user input