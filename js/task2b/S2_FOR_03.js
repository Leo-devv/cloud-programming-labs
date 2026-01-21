// S2_FOR_03 - Sum until threshold

function sumUntil(nums, threshold) {
  let sum = 0;
  for (const n of nums) {
    if (sum + n > threshold) {
      break;
    }
    sum += n;
  }
  return sum;
}

// tests
console.log(sumUntil([1, 2, 3, 4, 5], 10)); // 10 (1+2+3+4)
console.log(sumUntil([1, 2, 3, 4, 5], 6));  // 6 (1+2+3)
console.log(sumUntil([5, 5, 5], 7));         // 5
console.log(sumUntil([10, 20], 5));          // 0
console.log(sumUntil([], 100));              // 0
