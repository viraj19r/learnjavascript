const http = require("http"); // http module/api to work with http request and responses
const { endianness } = require("os");
// create a local server
const server = http.createServer((request, response) => {
  let body = [];
  request.on("data", (chunk)=> {
      body.push(chunk);  
  });
  request.on("end", ()=> {
      body = Buffer.concat(body).toString();  // converting our array into strings(buffer is a global object)
      console.log(body);
  });

  response.setHeader("Content-Type","text/html");
  response.write("hello there"); //plain text
  response.write("<h1>hello there</h1>");  // it will be consoled as html first heading
  response.write("<form method = 'POST' action = '/'><input name='username' type = 'text' ><button type = 'submit'>Send<button></form>")
  response.end(); // it will now send the response
}); // requires argument as a listener function

server.listen(3000); // after calling this server starts working(start listening) and we can specify(as an argument) our port where we want to listen a
