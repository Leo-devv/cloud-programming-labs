// S2_FOR_02 - Find first match

function findFirstEven(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      return nums[i];
    }
  }
  return null;
}

// tests
console.log(findFirstEven([1, 3, 5, 8, 9]));  // 8
console.log(findFirstEven([2, 4, 6]));         // 2
console.log(findFirstEven([1, 3, 5, 7]));      // null
console.log(findFirstEven([]));                 // null
