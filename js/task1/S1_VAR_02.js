// S1_VAR_02 - Block scope check
// Demonstrates let vs var scoping behavior

// Test 1: let is block-scoped
console.log("=== Testing let (block-scoped) ===");
try {
  {
    let blockVar = "I exist only inside this block";
    console.log("Inside block:", blockVar);
  }
  // This would cause a ReferenceError at parse time, so we use eval to demo at runtime
  eval("console.log(blockVar)");
} catch (err) {
  console.log("Outside block: Cannot access 'blockVar' -", err.name);
}

// Test 2: var is function-scoped (ignores block boundaries)
console.log("\n=== Testing var (function-scoped) ===");
{
  var functionVar = "I escape the block because var ignores block scope";
  console.log("Inside block:", functionVar);
}
console.log("Outside block:", functionVar);

// Explanation:
// let respects block boundaries - the variable only exists within { }
// var ignores blocks entirely - it's scoped to the nearest function (or global)
// This is why let/const are preferred: they prevent accidental variable leakage
