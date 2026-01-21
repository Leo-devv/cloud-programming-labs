// S1_VAR_04 - Safe type label
// typeof null === "object" is a famous JS bug, so we fix it

function typeLabel(value) {
  if (value === null) return "null";
  return typeof value;
}

// testing
console.log("typeLabel(null):", typeLabel(null));
console.log("typeLabel(undefined):", typeLabel(undefined));
console.log("typeLabel(42):", typeLabel(42));
console.log("typeLabel('42'):", typeLabel("42"));
console.log("typeLabel(true):", typeLabel(true));
console.log("typeLabel({}):", typeLabel({}));
console.log("typeLabel([]):", typeLabel([]));
console.log("typeLabel(() => {}):", typeLabel(() => {}));
