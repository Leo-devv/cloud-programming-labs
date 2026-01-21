// S3_FN_03 - Closures
// makeAdder returns a function that remembers x

const makeAdder = x => n => x + n;

// tests
const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log("add5(3):", add5(3));    // 8
console.log("add5(7):", add5(7));    // 12
console.log("add10(3):", add10(3));  // 13
console.log("add10(20):", add10(20)); // 30

// one-liner usage
console.log("makeAdder(100)(50):", makeAdder(100)(50)); // 150
