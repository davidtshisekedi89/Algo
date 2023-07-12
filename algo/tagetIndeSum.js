//Q1 write a function that accept a Strings as an argument 
// the functin should capitalize ONLY every other Letter in tht String 
// the function should then returning the converted String
// function capitalizeEveryOther(str) {
  // We will use the toUpperCase() method to capitalize char
  // We will use the split() method to divide a string into     an array
  // Check if the index is odd (i % 2 == 1) 
  //my first condition check if our string have a lower letter so we can turn it to UpperCase 
  //my second condition check if our string have a upper letter so we can turn it to toLowerCase()
  // Finalize by using toString() and return the str
    // let stringLetter = "";
  // for (let i = 0; i < str.length; i++) {
    // console.log(str[i]);
    // if (i %2  == 0) {
    //    stringLetter += str[i].toUpperCase();
    // console.log(stringLetter)
    // } else {
    //  stringLetter += str[i].toLowerCase();
      // console.log(stringLetter)
  //   }
   
  // }
  // return stringLetter;
  // console.log(str)
// }

// console.log(capitalizeEveryOther("hel1o???"));







// test 

// "hello " = "HeLlO";
// "yo eli" = "Yo eLi";
// "hel1o???" = "HeL1O???"
// "HELLO" = "HeLlO"






// Q2 Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.
function targetIndexSum(nums, target){
    // We have an array of integers called nums
    // We must return the two indices that add up to the target
    // We will use an array to store the two indices
    let sumIdx = [];
    
    // We will use a forloop to iterate through the nums array 
    for(let i = 0; i < nums.length; i++){
    // We will check if two indices add to the target
      if(nums[i] + nums[i+1] === target){
        sumIdx.push(i, i+1);
      }
      
    }
    return sumIdx;
  }
  
  console.log(targetIndexSum([2,7,11,15], 9));
  
  // Example 1:
  
  // Input: nums = [2,7,11,15], target = 9
  // Output: [0,1]
  // Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
    
  // Example 2:
  
  // Input: nums = [3,2,4], target = 6
  // Output: [1,2]
    
  // Example 3:
  
  // Input: nums = [3,3], target = 6
  // Output: [0,1]