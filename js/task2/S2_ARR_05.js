// S2_ARR_05 - Stats
// return min, max, avg for array of numbers

function stats(nums) {
  if (nums.length === 0) return null;

  let min = nums[0];
  let max = nums[0];
  let sum = 0;

  for (const n of nums) {
    if (n < min) min = n;
    if (n > max) max = n;
    sum += n;
  }

  return {
    min,
    max,
    avg: sum / nums.length
  };
}

// tests
console.log(stats([1, 2, 3, 4, 5]));    // { min: 1, max: 5, avg: 3 }
console.log(stats([10, 20, 30]));       // { min: 10, max: 30, avg: 20 }
console.log(stats([5]));                 // { min: 5, max: 5, avg: 5 }
console.log(stats([-5, 0, 5]));         // { min: -5, max: 5, avg: 0 }
console.log(stats([]));                  // null
