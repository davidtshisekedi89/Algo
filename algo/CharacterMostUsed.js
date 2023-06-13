
// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


// PSEUDOCODE

// iterate through given string parameter
// count character that has the highest count 
// return char with highest count 




function maxChar(str) {
  let count = 0;
  let character = '';
  for(let char = 0; char < str.length; char++){
    // console.log(char);
    if(str[char] === str[char+1] || str[char] === str[char-1]){
      // console.log(str[char]);
      count++;
      character = str[char]; 
    }
  }
  
  console.log(count);
  return character;
}

console.log(maxChar("abcccccccd"));



