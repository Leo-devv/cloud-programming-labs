// S1_VAR_07 - Coercion via unary +
// Unary + converts strings to numbers, returns NaN for invalid strings

function toNumberOrNull(x) {
  if (typeof x !== "string") return null;
  const num = +x;
  if (Number.isNaN(num)) return null;
  return num;
}

// Test cases
const testValues = [
  { label: '"12"', value: "12" },
  { label: '"12.5"', value: "12.5" },
  { label: '" 12 "', value: " 12 " },
  { label: '"12x"', value: "12x" },
  { label: '""', value: "" }
];

console.log("Input".padEnd(12) + "toNumberOrNull()");
console.log("-".repeat(30));

for (const t of testValues) {
  const result = toNumberOrNull(t.value);
  console.log(t.label.padEnd(12) + (result === null ? "null" : result));
}

// Note on empty string: +"" returns 0, which is technically a valid number
// The exercise doesn't specify handling this edge case, so we return 0
