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


var getConcatenation = function(nums) {
    let n = nums.length;
    let ans = [];
   for (var k = 0; k < 2; k++){
     
    for(var i = 0; i < n; i++){
      ans.push(nums[i])
      console.log("I am pushing!")
      
  
    }
  
   }
    console.log(ans);
    return ans;
    
      
  };
  
  // let nums = [1,2,1];
  let nums2 = [1,3,2,1];
  
  getConcatenation(nums2);