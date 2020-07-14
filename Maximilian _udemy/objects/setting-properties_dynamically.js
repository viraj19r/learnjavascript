const userInputKeyName = 'module';  // this will be user input
const person = {
    "first name": "Dan",  
    age: "30",
    [userInputKeyName] : "  ",  // in this way we can set properties to show against user input(can assign any value here)
    1.5 : "hello",
    hobbies: ["playing", "coding"], 
    greet: () => "hi there",
  };