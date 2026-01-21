// S2_ARR_04 - Flatten 1 level
// only flattens one level deep

function flatten1(arr) {
  const result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      for (const inner of item) {
        result.push(inner);
      }
    } else {
      result.push(item);
    }
  }
  return result;
}

// tests
console.log(flatten1([1, [2, 3], [4], 5]));         // [1, 2, 3, 4, 5]
console.log(flatten1([[1, 2], [3, 4]]));           // [1, 2, 3, 4]
console.log(flatten1([1, 2, 3]));                   // [1, 2, 3]
console.log(flatten1([1, [2, [3, 4]], 5]));        // [1, 2, [3, 4], 5] - only 1 level
console.log(flatten1([]));                          // []
