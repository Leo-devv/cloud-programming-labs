// S3_PIPE_01 - pipe()
// left-to-right function composition

const pipe = (...fns) => x => {
  let result = x;
  for (const fn of fns) {
    result = fn(result);
  }
  return result;
};

// tests
const addOne = x => x + 1;
const double = x => x * 2;
const square = x => x * x;

const pipeline = pipe(addOne, double, square);

console.log("pipe(addOne, double, square)(3):");
console.log("  3 -> +1 -> 4 -> *2 -> 8 -> ^2 -> 64");
console.log("  Result:", pipeline(3)); // 64

const another = pipe(double, addOne);
console.log("\npipe(double, addOne)(5):", another(5)); // 11
