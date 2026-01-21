// S3_FN_06 - Map values
// apply a function to each value in an object

const mapValues = (obj, fn) => {
  const result = {};
  for (const key in obj) {
    result[key] = fn(obj[key]);
  }
  return result;
};

// tests
const prices = { apple: 1.5, banana: 0.75, orange: 2.0 };

console.log("Original:", prices);
console.log("Doubled:", mapValues(prices, x => x * 2));
console.log("Rounded:", mapValues(prices, x => Math.round(x)));

const words = { a: "hello", b: "world" };
console.log("Uppercased:", mapValues(words, s => s.toUpperCase()));
