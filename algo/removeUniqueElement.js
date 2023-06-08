let removeDuplicate = function(nums) {
    let uniqueNums = [];
    
    for (let i = 0; i < nums.length; i++) {
      if (!uniqueNums.includes(nums[i])) {
        uniqueNums.push(nums[i]);
      }
    }
    
    return uniqueNums;
  };
  
  let nums = [1, 1, 2, 3, 3, 4, 4, 5, 5, 6, 0, 0, 0, 0, -1, -1, 1, -1];
  let result = removeDuplicate(nums);
  console.log(result);
  