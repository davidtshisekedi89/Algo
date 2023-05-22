2
// Using what we've learned about loops and conditionals, solve this classic coding challenge (it's been a favorite in interviews for years).

// Write code that will go through each number from 1 to 100 and:

// For each number that is a multiple of 3, print "Fizz"
// For each number that is a multiple of 5, print "Buzz"
// For numbers which are a multiple of both 3 and 5, print "FizzBuzz"
// All other numbers should just print normally

// A short segment should look like

// 1
// 2
// "Fizz"
// 4
// "Buzz"
// "Fizz"
// 7
// 8
// "Fizz"
// "Buzz"
// 11
// "Fizz"
// 13
// 14
// "FizzBuzz"
function FizzBuzz(){
  for(var i = 1 ; i <= 100; i++){
    if (i % 15 === 0){
      console.log("FizzBuzz")
      continue;
    }
    if(i % 3 === 0){
      console.log("Fizz")
      continue;
    }
    if(i % 5 === 0){
      console.log("Buzz")
    continue;
    } else {
      console.log(i);
     
    }
    
    
  }
  
};
FizzBuzz();
