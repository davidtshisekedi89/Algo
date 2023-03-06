/* 
  https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
  Stable sort
  
  Time Complexity
    - Best: O(n) linear when array is already sorted.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic when the array is reverse sorted.
  Space: O(1) constant.
  For review, create a function that uses BubbleSort to sort an unsorted array in-place.
  For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted
*/

const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts the given nums in-place by mutating the array.
 * Best: O(n) linear when array is already sorted.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic when the array is reverse sorted.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given nums after being sorted.
 */
function bubbleSort(nums = []) {}


function bubbleSort(nums = []) {

    let len = nums.length;
    let swapped = false

    for (let i = 0; i < len - 1; i++){
        swapped = false

        for (let j = 0; j < len - i - 1; j++){

            if (nums[j] > nums[j+1]){

                const temp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = temp;
                swapped = true;
            }
        }
        console.log(nums.join(", "))
        if (!swapped){
            break
        }
        
    }
    return nums;
}

bubbleSort(numsRandomOrder)
bubbleSort(numsReversed)
bubbleSort(numsOrdered)