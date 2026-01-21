// S3_FN_04 - Map/filter/reduce with arrows
// sum of squares of even numbers

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumOfSquaresOfEvens = nums
  .filter(n => n % 2 === 0)      // keep evens: [2, 4, 6, 8, 10]
  .map(n => n * n)               // square: [4, 16, 36, 64, 100]
  .reduce((sum, n) => sum + n, 0); // sum: 220

console.log("Numbers:", nums);
console.log("Evens:", nums.filter(n => n % 2 === 0));
console.log("Squared:", nums.filter(n => n % 2 === 0).map(n => n * n));
console.log("Sum of squares of evens:", sumOfSquaresOfEvens);
