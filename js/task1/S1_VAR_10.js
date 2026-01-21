// S1_VAR_10 - Mini debugger
// A utility function to inspect any value's type characteristics

function inspect(value) {
  return {
    type: value === null ? "null" : typeof value,
    isArray: Array.isArray(value),
    isNull: value === null,
    isNaN: Number.isNaN(value)
  };
}

// Test with various values
const testValues = [
  null,
  undefined,
  42,
  "hello",
  true,
  [],
  {},
  NaN,
  () => {},
  new Date()
];

console.log("inspect() results:\n");

for (const val of testValues) {
  const label = val === null ? "null"
    : val === undefined ? "undefined"
    : Number.isNaN(val) ? "NaN"
    : typeof val === "function" ? "function"
    : Array.isArray(val) ? "array"
    : val instanceof Date ? "Date"
    : typeof val === "object" ? "object"
    : JSON.stringify(val);

  console.log(`${label}:`);
  console.log(inspect(val));
  console.log();
}
