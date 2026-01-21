// S2_FOR_04 - Count occurrences

function countOccurrences(values) {
  const counts = {};
  for (const val of values) {
    if (counts[val] === undefined) {
      counts[val] = 1;
    } else {
      counts[val]++;
    }
  }
  return counts;
}

// tests
console.log(countOccurrences(["a", "b", "a", "c", "a", "b"]));
// { a: 3, b: 2, c: 1 }

console.log(countOccurrences([1, 1, 2, 2, 2, 3]));
// { 1: 2, 2: 3, 3: 1 }

console.log(countOccurrences([]));
// {}
