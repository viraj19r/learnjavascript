let randomNumber = Math.random();

function getRandomGreet (){
    if (randomNumber > 0 && randomNumber < 0.34){
        console.log("Hi");
    }
    else if  (randomNumber > 0.34 && randomNumber< 0.66){
        console.log( "Hello");
    }
    else {
        console.log("welcome");
    }
}
