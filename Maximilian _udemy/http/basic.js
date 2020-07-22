const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts"); 
// xhr.responseType = "json"; // this will parse also parse now we don't need to parse like JSON.parse
xhr.onload = function () {
  //   console.log(this.response);
  const listOfPosts = JSON.parse(xhr.response);
  console.log(listOfPosts);
};
xhr.send();
// we can convert json into javascript and vice versa
// JSON.stringify to convert javascript into json
// JSON.parse to convert json into javascript
