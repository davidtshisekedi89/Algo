// let stack = []
// stack.push()
// stack.pop()



const str1 = "Y(3(p)p(3)r)s";
const expected1 = true;

const str2 = "N(0(p)3";
const expected2 = false;
// Explanation: not every parenthesis is closed.

const str3 = "N(0)t ) 0(k";
const expected3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.

const str4 = "a(b))(c";
const expected4 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing.

/**
 * Determines whether the parenthesis in the given string are valid.
 * Each opening parenthesis must have exactly one closing parenthesis.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the parenthesis are valid.
 */
function parensValid(str) {}


// -------------------------------------------------------------

function parensValid(str) {
    //insitalize an empty stack
    let stack = []
    //start interations
    for(i = 0; i < str.length; i++){
        //checking if str[i] is a "("", then push it into stack
        if(str[i] == "("){
            stack.push("(");
        }
        //checking if str[i] is a ")", if so continue through the loop
        else if (str[i] == ")"){
            //check if stack is empty there isn't a (. then there is no opening parenthesis to match the closing so return false
            if(stack.length == 0){
                console.log("farts")
                return false
            }else{
                // else, pop the topmost element from stack (it found an opening parenthesis and popped it)
                stack.pop();
            }
        }
    }
    // check if stack is empty after the for loop. if empty then all parenthesis have been matched, if not, then there’s opening parenthesis not closed yet
    return stack.length == 0;
}

console.log(parensValid(str1));
console.log(parensValid(str2));
console.log(parensValid(str3));
console.log(parensValid(str4));
console.log(parensValid("()()))"));