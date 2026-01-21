// S3_PIPE_02 - compose()
// right-to-left function composition

const compose = (...fns) => x => {
  let result = x;
  for (let i = fns.length - 1; i >= 0; i--) {
    result = fns[i](result);
  }
  return result;
};

// tests
const addOne = x => x + 1;
const double = x => x * 2;
const square = x => x * x;

const composed = compose(square, double, addOne);

console.log("compose(square, double, addOne)(3):");
console.log("  Executes right-to-left: addOne -> double -> square");
console.log("  3 -> +1 -> 4 -> *2 -> 8 -> ^2 -> 64");
console.log("  Result:", composed(3)); // 64

// compare with pipe - same result if order is reversed
console.log("\nSame as pipe(addOne, double, square)(3)");
