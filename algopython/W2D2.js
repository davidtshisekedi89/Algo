/* 
Given a non-empty array of odd length containing ints where every int but one
has a matching pair (another int that is the same)
return the only int that has no matching pair.
*/

const nums1 = [1];
const expected1 = 1;

const nums2 = [5, 4, 5];
const expected2 = 4;

const nums3 = [5, 4, 3, 4, 3, 4, 5];
const expected3 = 4; // there is a pair of 4s but one 4 has no pair.

const nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const expected4 = 1;

function oddOccurrencesInArray(nums) {}
// ------------------solution 1

function oddOccurrencesInArray(nums) {
    for (let i = 0; i < nums.length; i++){
        let count = 0;
        for( let j = 0; j < nums.length; j++){
            if( nums[j] == nums[i]){
                count++ ; 
            }
        }
        if (count % 2 != 0){
            return nums[i];
        }
    }
}

console.log(oddOccurrencesInArray(nums2));


//  -----------------solution 2


function oddOccurrencesInArray(nums) {

    var dictionary = {}

    // Frequency Table
    for (var i=0; i<nums.length;i++) {
        // console.log(Object.keys(dictionary))

        if (Object.keys(dictionary).includes(`${nums[i]}`)) {
            dictionary[`${nums[i]}`]++ 
        } else {
            dictionary[`${nums[i]}`] = 1 
        }
    }

    // console.log(dictionary)

    // Isolating Odd Occurance
    for (var i=0; i<Object.keys(dictionary).length;i++) {

        // console.log(Object.keys(dictionary)[i])

        if (dictionary[Object.keys(dictionary)[i]] % 2 != 0) {
            return Object.keys(dictionary)[i]
        }
    }
}

console.log(oddOccurrencesInArray(nums3))