// S2_ARR_02 - Deduplicate
// remove duplicates without using Set

function unique(values) {
  const result = [];
  for (const val of values) {
    if (result.indexOf(val) === -1) {
      result.push(val);
    }
  }
  return result;
}

// tests
console.log(unique([1, 2, 2, 3, 1, 4]));         // [1, 2, 3, 4]
console.log(unique(["a", "b", "a", "c", "b"])); // ["a", "b", "c"]
console.log(unique([1, 1, 1, 1]));               // [1]
console.log(unique([]));                          // []
