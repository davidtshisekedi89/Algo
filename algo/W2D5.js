/* 
  An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
  typically using all the original letters exactly once.
  Is there a quick way to determine if they aren't an anagram before spending more time?
  Given two strings
  return whether or not they are anagrams
*/

const strA1 = "yes";
const strB1 = "eys";
const expected1 = true;

const strA2 = "yes";
const strB2 = "eYs";
const expected2 = true;

const strA3 = "no";
const strB3 = "noo";
const expected3 = false;

const strA4 = "silent";
const strB4 = "listen";
const expected4 = true;

/**
 * Determines whether s1 and s2 are anagrams of each other.
 * Anagrams have all the same letters but in different orders.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether s1 and s2 are anagrams.
 */
function isAnagram(s1, s2) {}

/*****************************************************************************/


function isAnagram(s1, s2) {

    // check if the lengths are equal
    if (s1.length != s2.length) {
        return false
    }

    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    var freq1 = {};
    var freq2 = {};

    // loop to create frequency table
    for(var i = 0; i < s1.length; i++) {
        console.log(s1[i], s2[i]);

        // for frequency if s1[i] is a key then add 1 to value
        // if not a key set value to 1
        if (Object.keys(freq1).includes(s1[i])) {
            freq1[s1[i]]++;
        } else {
            freq1[s1[i]] = 1;
        }

        // for frequency if s2[i] is a key then add 1 to value
        // if not a key set value to 1
        if (Object.keys(freq2).includes(s2[i])) {
            freq2[s2[i]]++;
        } else {
            freq2[s2[i]] = 1;
        }
    }


    console.log("s1 table:",freq1)
    console.log("s2 table:",freq2)

    freq1Keys = Object.keys(freq1)
    for(var key of freq1Keys) {
        if(freq1[key] !== freq2[key]) {
            return false;
        }

    }
    return true;
}