/* 
  String: Reverse
  Given a string,
  return a new string that is the given string reversed
*/

const str1 = "creature";
// const expected1 = "erutaerc";

// Create 

const str2 = "dog";
// const expected2 = "god";

const str3 = "hello";
// const expected3 = "olleh";

const str4 = "";
// const expected4 = "";

/**
 * Reverses the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str String to be reversed.
 * @returns {string} The given str reversed.
 */
function reverseString(str) {
    var newString = "";

    for( var i = str.length-1; i >= 0; i--){
        newString+= str[i];
    }
    console.log(newString);
}

reverseString(str2);




// solution2



function reverseString(str) {
    var newString = "";
    
    for(var i = str.length - 1; i>=0; i--){
        newString += str[i];
    } console.log(newString)
    return newString;
}
reverseString(str2)