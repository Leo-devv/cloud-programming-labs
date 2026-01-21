// S2_ARR_01 - Clean numbers
// parse strings to numbers, drop anything that becomes NaN

function cleanNumbers(arr) {
  const result = [];
  for (const item of arr) {
    const num = Number(item);
    if (!Number.isNaN(num)) {
      result.push(num);
    }
  }
  return result;
}

// tests
console.log(cleanNumbers([" 1 ", "x", "2"]));        // [1, 2]
console.log(cleanNumbers(["10", "20", "abc", "30"])); // [10, 20, 30]
console.log(cleanNumbers(["", "0", " 5.5 "]));       // [0, 0, 5.5]
console.log(cleanNumbers(["foo", "bar"]));           // []
