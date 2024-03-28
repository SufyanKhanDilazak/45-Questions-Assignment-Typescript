const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function printOrdinalNumbers(nums: number[]): void {
  for (const num of nums) {
    let ending = "th";
    if (num === 11 || num === 12 || num === 13) {
      ending = "th"; 
    } else if (num % 10 === 1) {
      ending = "st";
    } else if (num % 10 === 2) {
      ending = "nd";
    } else if (num % 10 === 3) {
      ending = "rd";
    }
    console.log(`${num}${ending}`);
  }
}

printOrdinalNumbers(numbers);
