// Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9
// ====solution 1=======
function reverseInt(n) {
    const reversed = n 
      .toString()
      .split('')
      .reverse()
      .join('')
  
    if(n < 0){
      return parseInt(reversed) * -1;
    }
    return parseInt(reversed);
  } 
  
  console.log(reverseInt(-523));
  console.log(reverseInt(500));


//   ===== solution 2=======

function reverseInt(n){

    if (n < 0){
        
        n = n * -1
        let strNum = String(n);
        let newNumber = strNum.split("").reverse().join("");
        newNumber = newNumber * -1;
        return newNumber;
      } else {
        let strNum = String(n);
        newNumber = strNum.split("").reverse().join("");
        return newNumber;
      }
} 


console.log(reverseInt(-523));
console.log(reverseInt(500));