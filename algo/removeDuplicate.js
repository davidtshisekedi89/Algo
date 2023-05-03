// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.


// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

//    P
//    i
// [1,1,2,3,3,4,4,5,5,6] i[0],i[1]
// [1,2,3,4,5,6]
//[1,2,3,4,5,6,6] same array
//[1,2,3,4,5,6,_] same array,  because we don't have anything to compare
  /**
 * @param {number[]} nums
 * @return {number}
 */
  var removeDuplicates = function(nums) {
    // isEmpty = false;
    let pointer = 1;
    if(nums.length === 0){
      pointer = pointer - 1;
      console.log(pointer);
      return nums;
    }
    
  
    for(var i = 1; i < nums.length; i++){
  
      if(nums[i-1] != nums[i]){
        nums[pointer] = nums[i];
        pointer++;
      }
    
    }
      console.log(pointer);
    // console.log(nums);
      return nums;       //update array
  
  };
    
    
  // nums = [1,1,1,2,2,3,3,3,4]
  nums2 = [4,5,6,7,7,7,8,8,9]
  let nums3 = []
  
  // let k = removeDuplicates(nums3)
  // const expectedNums = []
  // let k == expectedNums.length;
  // for (int i = 0; i < k; i++) {
  //     let nums3[i] == expectedNums[i];
  // }
  
  // removeDuplicates(nums);
  removeDuplicates(nums2);
  // console.log(nums);
  console.log(nums2);
  // removeDuplicates(nums3);
  // console.log( nums3);
  
  