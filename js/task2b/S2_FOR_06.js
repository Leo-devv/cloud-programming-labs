// S2_FOR_06 - Nested arrays

function sumNested(matrix) {
  let total = 0;
  for (const row of matrix) {
    for (const num of row) {
      total += num;
    }
  }
  return total;
}

// tests
console.log(sumNested([[1, 2], [3, 4], [5, 6]]));  // 21
console.log(sumNested([[1, 2, 3], [4, 5, 6]]));   // 21
console.log(sumNested([[10], [20], [30]]));       // 60
console.log(sumNested([[], [], []]));              // 0
console.log(sumNested([]));                        // 0
