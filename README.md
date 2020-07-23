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

| Function declaration/statement                                          | Function expression                                                            |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| function multiply (a,b) {                                               | const multiply=function(a,b){                                                  |
| return a*b;    }                                                        | return a*b;   }                                                                |
| Hoisted to top,can be declared anywhere in the file(also after its use) | hoisted to top but cannot initialized/defined(can't be declared after its use) |


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
## Array vs Sets vs Maps
| Array                                                                           | Sets                                                                      | Maps                                                                    |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| stores data of any kind and length                                              | stores data of any kind and length                                        | stores key-value data of any kind and length,any key values are allowed |
| Iterable, special array methods are available                                   | Iterable,some special set methods are available                           | Iterable,with some special map methods                                  |
| order is guaranteed, duplicates are allowed,zero-based index to access elements | order is not guaranteed, duplicates are not allowed,no index-based access | order is guaranteed,duplicate keys are not allowed, key-based access    |
## Maps vs Objects
| Map                                                        | Objects                                              |
| ---------------------------------------------------------- | ---------------------------------------------------- |
| can use any value(any type) as keys                        | only may use strings,numbers and symbols             |
| Better performance for large quantities of data            | perfect for medium sized data(30-40 key value pairs) |
| better performance when adding or removing data frequently | easier and quicker to create(also performance wise)  |
#### WeakSet or WeakMap
Is like set but have some less methods than set/Map, it is used to store information that is used rarely. so that the browser/javascript inbuilt garbage collector can analyse it and then delete it to increase the performance.

### this keyword
The JavaScript this keyword refers to the object it belongs to(current object).
 
 It has different values depending on where it is used:
  * In a method, this refers to the owner object.
  * Alone, this refers to the global object(object window).
  * In a function, this refers to the global object.
  * In a function, in strict mode, this is undefined.
  * In an event, this refers to the element that received the event.
  * Methods like call(), and apply() can refer this to any object.

### Class
classes are blueprints for objects,they define how the objects look like,which properties and method they have. objects are basically instances of classes.
##### Fields vs Properties
the properties which are declared outside of constructor method are called fields

| Static field/property/method/                         | Instance field/property/method             |
| ----------------------------------------------------- | ------------------------------------------ |
| defined with static word                              | defined without static word                |
| only accessible on class itself without instantiation | only accessible on instance based on class |

##### private fields,methods and properties are only accessible inside the class not outside the class(syntax = #propertyName. Privates should start with #)

### Prototypes
Javascript uses prototypical inheritance(All JavaScript objects inherit properties and methods from a prototype.).The class syntax is basically just syntactic sugar(simplified form to be human readable because working with them is not easy). So basically constructor function and prototypes gives power to javascript objects

All JavaScript objects inherit properties and methods from a prototype:

- Date objects inherit from Date.prototype
- Array objects inherit from Array.prototype
- Person objects inherit from Person.prototype
- The Object.prototype is on the top of the prototype inheritance chain:
  Date objects, Array objects, and Person objects inherit from Object.prototype.

  The JavaScript prototype property allows us to add new properties to object constructors:
  
   ``` function Person(first, last, age, eyeColor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyeColor;
  } Person.prototype.nationality = "English";
  ```

  The JavaScript prototype property also allows us to add new methods to objects constructors:

   ``` function Person(first, last, age,   eyeColor){    
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyeColor;
  }Person.prototype.name = function()
  {return this.firstName + " " + this.lastName;
  };
  ```

  ### prototype chain 
  let us assume we have an constructor function/class and we created a new instance of it (an object). Now we want to call a function from it which actually not created inside it. so first of all javascript look for it inside the constructor function(is it defined in it  ?).If yes then further code will be executed otherwise it will check in  ` __proto__ ` prototype and more and more deeper(base of base) until not found and then last prototype it checks is our global objects.

    ### [data attribute](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)
    ### [what is dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLOrForeignElement/dataset)
    ### [determine dimension of an element](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
    #### [determine dimension of an element short summary](https://drive.google.com/file/d/1A4gL3srrGBy6Ze4bX8IsjGGa-4VXZv4Y/view?usp=sharing)
     window.innerWidth and window.innerHeight will give the dimensions of window object excluding the scroll bars. document.documentElement.clientHeight/clientWidth will actually give the actual size of the window including the scroll bar(if there any).
     ### [scroll handling](https://developer.mozilla.org/en-US/docs/Web/API/Window/scroll)
     ### [get input in javascript using html template tag](https://javascript.info/template-element)    
     ### [Scheduling/Timer: setTimeout and setInterval](Scheduling: setTimeout and setInterval)

     ### [location object on w3 school](https://www.w3schools.com/jsref/obj_location.asp)
     ### [location object mdn](https://developer.mozilla.org/en-US/docs/Web/API/Location)
     ### [history object](https://www.w3schools.com/jsref/obj_history.asp)
     ### [history api mdn](https://developer.mozilla.org/en-US/docs/Web/API/History_API)
     ### [Navigator object](https://www.w3schools.com/jsref/obj_navigator.asp)
     ### [navigator api mdn](https://developer.mozilla.org/en-US/docs/Web/API/Navigator)
     ### [date object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
     ### [error object and handling error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

### pure and impure functions
a function is pure if it give a fix output for particular arguments
a function is impure if its output is random for fix arguments and also it can change the things outside the function body(like a variable)

### Security
when a website is live anyone can see our source code through browser developer tools(also important information,database information) and manipulate it, so the best practice to secure our data is that we should not put important information to our frontend code.

#### Cross-site scripting attacks(XSS)
malicious javascript code is injected in our code and then executed and injected code can do anything that our code can. The injected code also get access to server side code(as it can send and receive request, it gets all control behind the scenes).
- Example - if anyone changes our innerHtml code then it should be changed and shown changed in our source code, but result is not shown in browser in every case, because modern browsers are secured they don't render the changed code.
- The best practice is not to use the innerHtml property in javascript, we should use text-content instead.
- Or we should not store database credentials to open a connection to database.
- To prevent this attack we can use [sanitize html package](https://www.npmjs.com/package/sanitize-html), every time we send code to server side(sanitization should be done each time we send code on server and then only it should store in database).
- We should also aware of while using third party libraries/packages, we should use only the ones which are secured and trusted ones(not malicious and fraud).

#### Cross-site Request Forgery(CSRF)
when we normally visits a website and there found a link or image link and open it and then there the code get executed and access our cookies and other credentials. 
- Requests to malicious servers are made through user's cookies without knowing the user
- this can be prevented by using csrf token on server side 
#### Cross origin Resource sharing(CORS)
 It is not a attack pattern but a security pattern/mechanism.
 -  Requests are only allowed by same/one origin(domain/server).
 -  Requests must be controlled via only servers side response header or browsers

### Deploying Javascript code
Mainly there are two kinds of websites/application
 - Single-Page-Applications (HTML + CSS + JS with only one HTML page being served, client-side JS is used to re-render the page dynamically)
 - Static websites- which only contain html,css and javascript - requires a static host(which doesn't execute server side code)-like as AWS S3,firebase hosting,
 - Dynamic websites- one which also contain server side codes - requires a dynamic host(able to run server side code also)-like as AWS elastic beanstalk, Heroku,

##### Deployment steps
 1. Develop/Write code
 2. Test code
 3. optimize code (like add fallback for good browser support)
 4. Build code for production(with webpack to shrink our code)
 5. Deploying output

For practice (static hosting) we can deploy our project to firebase hosting(google).
For dynamic hosting(server side hosting) we can use 'Heroku' which is free to use initially.

### Performance Optimizations
Mainly we consider two types of performances
 |startup time performance| run time performance|
 |----------------------|-------------------|
 |how does it takes to see something on screen and how quickly a user is able to interact with the screen|how smooth does the application run(are there freezes or logs) or how smooth do the animation play(is there any visual log) or are there any memory leaks ,is the page getting slower over the time|
|how fast the script load and execute ?|how much work does the script do and how much memory is occupied|
|it depends only on browser side javascript|depends on all side javascript|

  Performance factors
 - Start time
   - Bundle/script size: delays initial parsing and execution
   - number of http round trips : delays initial parsing and execution
 - Run time
   - avoid unnecessary code execution, especially unnecessary dom operations
   - Avoid memory leaks - can crash our application in worst case,but slow downs in all cases
   - regularly find code alternatives for better performance
   
 - unnecessary html, css and javascript code influences the speed and configuration of server. complex id and class selector in css also effects a lot.
 - use performance.now()
 - use browser dev tools(chrome dev tools)
 - use jsperf.com and webpagetest.com website 
