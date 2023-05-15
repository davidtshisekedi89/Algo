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
    let P = 1;
    for(var i = 1; i < nums.length; i++){
      if(nums[i] != nums[i-1]){
        nums[P] = nums[i];
        P++;
        continue;
      }
  
    }
    console.log(P);
    return nums;
  }
  
  // let nums = [1,1,2,3,3,4,4,5,5,6]
  // removeDuplicates(nums);
  // console.log(nums);
  
  
  
  
    
  // Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
  
  // Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
  
  // Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
  // Return k.
  // Custom Judge:
  
  // The judge will test your solution with the following code:
  
  // int[] nums = [...]; // Input array
  // int val = ...; // Value to remove
  // int[] expectedNums = [...]; // The expected answer with correct length.
  // It is sorted with no values equaling val.
  
  // int k = removeElement(nums, val); // Calls your implementation
  
  // assert k == expectedNums.length;
  // sort(nums, 0, k); // Sort the first k elements of nums
  // for (int i = 0; i < actualLength; i++) {
  //     assert nums[i] == expectedNums[i];
  // }
  // If all assertions pass, then your solution will be accepted.
  
  
  
  // Example 1:
  
  // Input: nums = [3,2,2,3], val = 3
  // Output: 2, nums = [2,2,_,_]
  // Explanation: Your function should return k = 2, with the first two elements of nums being 2.
  // It does not matter what you leave beyond the returned k (hence they are underscores).
  
  
  // Example 2:
  
  // Input: nums = [0,1,2,2,3,0,4,2], val = 2
  // Output: 5, nums = [0,1,4,0,3,_,_,_]
  // Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
  // Note that the five elements can be returned in any order.
  // It does not matter what you leave beyond the returned k (hence they are underscores).
  
  
  
  /**
   * @param {number[]} nums
   * @param {number} val
   * @return {number}
   */
  let P = 0;
  var removeElement = function(nums, val) {
    
    for(let i = nums.length - 1; i >= 0; i--){
      if(nums[i] === val){
        nums.splice(i , 1)
        console.log("I am Splicing!")
        
      } else {
        P++;
      }
  
      
    }
        console.log(P)
        return nums;
  }
  // nums = [0,1,2,2,3,0,4,2];
  // val = 2;
  // removeElement(nums, val)
  // console.log(nums)
  
  
  
  // Given an array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
  
  // Specifically, ans is the concatenation of two nums arrays.
  
  // Return the array ans.
  
   
  
  // Example 1:
  
  // Input: nums = [1,2,1]
  // Output: [1,2,1,1,2,1]
  // Explanation: The array ans is formed as follows:
  // - ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
  // - ans = [1,2,1,1,2,1]
  
  
  // Example 2:
  
  // Input: nums = [1,3,2,1]
  // Output: [1,3,2,1,1,3,2,1]
  // Explanation: The array ans is formed as follows:
  // - ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
  // - ans = [1,3,2,1,1,3,2,1]
  
  
  // nums = []
  
  
    let ans = [];
  var getConcatenation = function(nums) {
  
    for(var j = 0; j < 2; j++){
      
    for(var i = 0; i < nums.length; i++){
      ans.push(nums[i]);
    }
    }
    return ans;
    
  }
  
  let nums = [1,3,2,1];
  getConcatenation(nums);
  console.log(ans);