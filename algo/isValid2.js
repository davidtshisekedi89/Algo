                // ALGORITHIM 1
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
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

/**
 * @param {string} s
 * @return {boolean}
 */



// Input: s = "()[]{}"
// Output: true
// Example 3:

// [0][1][2][3][4][5][6]
//  (  )  [  ]  {  }  {    ( {)}

                // ALGORITHIM 1 - SOLUTION 1
                var isValid = function(s) {
                    let stack = [];
                    let valid = true;
                    let map = {")":"(", "}":"{", "]":"["};
                    
                    for(let i of s){
                      let isBracket = (i in map);
                      if(!isBracket){
                        stack.push(i);
                        console.log('Pushing stuff in');
                        continue;
                      } 
                      let isEqual = (stack[stack.length-1] === map[i]);
                        if(isEqual){
                          stack.pop();
                          console.log("Popping stuff out");
                          continue;
                      }
                      return false;
                    }
                    if(stack.length === 0){
                      return true
                    }
                    return false;
                    
                  };
                  // isValid("()");
                  // isValid("()[]{}");
                  // isValid("(]");
                  
                  // isValid();
                  console.log(isValid("[{()}]"));
                  
                  
                                  // ALGORITHIM 1 - SOLUTION 2
                  function isValid(s) {
                    let stack = [];
                    let brackets = {
                      '(': ')',
                      '{': '}',
                      '[': ']'
                    };
                  
                    for (let char of s) {
                      if (brackets[char]) {
                        // If the character is an opening bracket, push it onto the stack
                        stack.push(char);
                      } else {
                        // If the character is a closing bracket
                        let lastOpeningBracket = stack.pop();
                        
                        if (!lastOpeningBracket || brackets[lastOpeningBracket] !== char) {
                          // If there's no corresponding opening bracket or the closing bracket doesn't match
                          return false;
                        }
                      }
                    }
                  
                    // After iterating through the string, the stack should be empty for a valid string
                    return stack.length === 0;
                  }
                  
                  // Example usage:
                  console.log(isValid("()"));  // true
                  console.log(isValid("()[]{}"));  // true
                  console.log(isValid("(]"));  // false
                  console.log(isValid("([)]"));  // false
                  console.log(isValid("{[]}"));  // true