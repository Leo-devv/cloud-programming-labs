// S1_VAR_06 - NaN pitfalls
// NaN is the only value that doesn't equal itself, use Number.isNaN for checks

function classifyNumberLike(x) {
  if (Number.isNaN(x)) return "nan";
  if (typeof x === "number") return "number";
  return "not-a-number";
}

// Test cases
const testValues = [
  { label: "NaN", value: NaN },
  { label: "0", value: 0 },
  { label: '"0"', value: "0" },
  { label: '"abc"', value: "abc" },
  { label: "undefined", value: undefined }
];

console.log("Value".padEnd(15) + "typeof".padEnd(12) + "classifyNumberLike()");
console.log("-".repeat(45));

for (const t of testValues) {
  console.log(
    t.label.padEnd(15) +
    (typeof t.value).padEnd(12) +
    classifyNumberLike(t.value)
  );
}

// Note: Number.isNaN() vs global isNaN()
// isNaN("abc") returns true (coerces to NaN first)
// Number.isNaN("abc") returns false (no coercion, "abc" is not NaN)
