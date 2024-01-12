//questions from Codwars, and to practice js fundamentals

const isMorning = false; // or false
const isWeekend = false; // or true

const greeting = isMorning
  ? isWeekend
    ? 'Good morning, and happy weekend!'
    : 'Good morning, have a great day!'
  : isWeekend
  ? 'Good day, enjoy the weekend!'
  : 'Good day, make it awesome!';

console.log(greeting);

//condition ? expressionIfTrue : expressionIfFalse

//sorting an array, and if it's an empty array just return that

function solution(nums) {
  // //nums: This is a parameter representing an array of numbers.
  return nums
    ? nums.sort(function (a, b) {
        // nums ?: This is a ternary operator. It checks if the nums array is truthy (non-null, non-undefined, non-falsy).
        return a - b;
        // nums.sort(function(a, b) { return a - b;}): If nums is truthy, it sorts the array in ascending order using the sort method. The sorting is done by providing a callback function to sort that subtracts b from a. This callback function determines the sorting order.
        // If the result of the subtraction is negative, a comes before b (ascending order).
        // If the result is positive, b comes before a.
        // If the result is zero, the order remains unchanged.
      })
    : // : []: If nums is falsy (null, undefined, or an empty array), the function returns an empty array [].
      [];
}

function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) return 100;
  // This checks if the exam score is greater than 90 or the number
  // of projects is greater than 10. If either condition is true, the function immediately returns a grade of 100.
  if ((exam > 75) & (projects >= 5)) return 90;
  // If the first condition is not met, this checks if the exam score is greater
  //  than 75 and the number of projects is greater than or equal to 5. If this condition is true, the function returns a grade of 90.
  if ((exam > 50) & (projects >= 2)) return 75;
  return 0;
}
