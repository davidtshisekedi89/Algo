// Coding Exercise - Array Chunk
// Given an array and chunk size, divide the array into many subarrays where each subarray is of the provided size.
// Examples:
//  // Chunk size two:
//  chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
 
//  // Chunk size two:
//  chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
 
//  // Chunk size 3:
//  chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
 
//  // Chunk size 4:
//  chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
 
//  // Chunk size 10:
//  chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

let myArray = [];
function chunk(array, size) {
  // myArray = 

  for(let i = array.length; i > 0; i--){
    // console.log(myArray);
    if(array.length > 0){
     myArray.push(array.splice(0, size));
      console.log(myArray);
    }

    
  }
      return myArray;

      // var arr2 = arr.slice(0),
      //  arrays = [];

  
  }
    

console.log(chunk([1, 2, 3, 4, 5], 2));