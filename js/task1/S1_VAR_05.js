// S1_VAR_05 - Array vs object
// typeof [] returns "object", so we need Array.isArray()

function isArray(value) {
  return Array.isArray(value);
}

// Test cases
const testValues = [
  { label: "[]", value: [] },
  { label: "[1, 2, 3]", value: [1, 2, 3] },
  { label: "{}", value: {} },
  { label: "{ a: 1 }", value: { a: 1 } },
  { label: "null", value: null },
  { label: "'string'", value: "string" },
  { label: "new Array()", value: new Array() }
];

console.log("Value".padEnd(15) + "typeof".padEnd(12) + "isArray()");
console.log("-".repeat(38));

for (const t of testValues) {
  const typeofResult = t.value === null ? "object" : typeof t.value;
  console.log(
    t.label.padEnd(15) +
    typeofResult.padEnd(12) +
    String(isArray(t.value))
  );
}
