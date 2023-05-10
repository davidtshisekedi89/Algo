// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true

// Example 2:

// Input: s = "()[]{}"
// Output: true

// Example 3:

// Input: s = "(]"
// Output: false


let keyValue = {")": "(", "}": "{" , "]":"["};
let stack = [];
var isValid = function(s) {
  
  for(let i of s){
    let isBracket = (i in keyValue)
    if(!isBracket){
      stack.push(i);
      continue;
      } 
    let isEqual = (stack[stack.length -1] === keyValue[i])
    if (isEqual){
      stack.pop();
      continue;
    }
    return  false;
  }
  return (stack.length === 0);
    
  

};

let s = "([}){}";
console.log(isValid(s));





