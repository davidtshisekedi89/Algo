/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/

const str1 = "hello";
const expected1 = "olleh";

const str2 = "hello world";
const expected2 = "olleh dlrow";

const str3 = "abc def ghi";
const expected3 = "cba fed ihg";



/**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str Contains space separated words.
 * @returns {string} The given string with each word's letters reversed.
 */
function reverseWords(str) {
    str = str.split("");
    str = str.reverse("");
    str = str.join("");
    return str;
    }
    
console.log(reverseWords(str1));
console.log(reverseWords(str2));
console.log(reverseWords(str3));




// ----------------------------------------------------

function reverseWords(str) {
    let words = str.split(" ")
    let reversedWords = []
    for( var i = 0; i < words.length; i++){
      let word = words[i];
      let reversedWord = ""
      for( var j = word.length-1; j >= 0; j--){
        reversedWord += word[j]
      }
      reversedWords.push(reversedWord);
    }
    return reversedWords.join(" ")
  }
  
  
  console.log(reverseWords(str2))

