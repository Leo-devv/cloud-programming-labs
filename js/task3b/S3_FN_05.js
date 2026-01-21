// S3_FN_05 - Higher-order predicate
// atLeast returns a function usable with filter

const atLeast = min => n => n >= min;

// tests
const numbers = [5, 12, 8, 130, 44, 3, 99];

console.log("Numbers:", numbers);
console.log("atLeast(10):", numbers.filter(atLeast(10)));   // [12, 130, 44, 99]
console.log("atLeast(50):", numbers.filter(atLeast(50)));   // [130, 99]
console.log("atLeast(100):", numbers.filter(atLeast(100))); // [130]
