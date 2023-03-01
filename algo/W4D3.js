/* 
  Recursively reverse a string
  helpful methods:
  str.slice(beginIndex[, endIndex])
  returns a new string from beginIndex to endIndex exclusive
*/

const str1 = "abc";
const expected1 = "cba";

const str2 = "";
const expected2 = "";

/**
 * Recursively reverses a string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given str reversed.
 */
function reverseStr(str) {}

/*****************************************************************************/


function binarySearch(sortedNums, searchNum) {

    // console.log(sortedNums);
    // console.log(searchNum);

    if (sortedNums.length === 0) {
        return false;
    } else {
        // find middle of array
        let middle = Math.floor(sortedNums.length / 2);

        // compare middle to searchNum
        if (sortedNums[middle] === searchNum) {
            // if middle is searchNum, return true
            return true;
        }  else if (sortedNums[middle] > searchNum) {
            // search left side of array
            return binarySearch(sortedNums.slice(0, middle), searchNum);
        } else if (sortedNums[middle] < searchNum) {
            // search right side of array
            return binarySearch(sortedNums.slice(middle + 1), searchNum);
        } else {
            // if middle is not searchNum, return false
            return false;
        }
    }
}
console.log(binarySearch(nums2, searchNum2));



// =================================================================


function reverseString(str) {
    // base case
    if (str.length === 0) {
        return str;
    }
    // recursive case
    else {
        console.log(str.substr(1) + str.charAt(0))

        return reverseString(str.substr(1)) + str.charAt(0);
    }
}

// example usage
let str = "hello";
console.log(reverseString(str)); // output: "olleh"