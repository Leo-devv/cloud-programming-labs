// S3_FN_01 - Convert to arrows
// rewrite regular functions as arrow functions

// original functions (commented out for reference)
// function square(n) { return n * n; }
// function isOdd(n) { return n % 2 !== 0; }
// function greet(name) { return "Hello, " + name; }

// arrow versions
const square = n => n * n;
const isOdd = n => n % 2 !== 0;
const greet = name => "Hello, " + name;

// tests
console.log("square(5):", square(5));       // 25
console.log("square(12):", square(12));     // 144
console.log("isOdd(3):", isOdd(3));         // true
console.log("isOdd(4):", isOdd(4));         // false
console.log("greet('Leo'):", greet("Leo")); // "Hello, Leo"
