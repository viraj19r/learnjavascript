// proxy api creates traps for object operations
// it is instantiated using new keyword like as objects, then the proxy constructor takes the object as an argument(the object on which we want to apply proxy api)
const course = {
  title: "Javascript",
  price: 400,
};

const courseHandler = {
  // this function will be used to handle the objects trapped in proxy api
  get(obj, propertyName) {
    // this get(a trap of proxy api) takes two arguments which are provided by the proxy api
    console.log(propertyName);
    return obj[propertyName];
  },
  set(obj, propertyName, newValue) {
    // set trap
    obj[propertyName] = newValue;
  },
};

const pCourse = new Proxy(course, courseHandler);
pCourse.rating = 5;
console.log(pCourse.title);
