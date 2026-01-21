// S1_VAR_03 - const is not immutable
// const prevents reassignment, not mutation

const user = { name: "Ala", tags: [] };

console.log("Original user:", user);

// Mutating the object works fine - const only locks the binding, not the value
user.tags.push("developer");
user.tags.push("javascript");
user.name = "Ala Updated";

console.log("After mutation:", user);

// But reassigning the variable itself fails
try {
  eval('user = {}');
} catch (err) {
  console.log("\nReassignment error:", err.message);
}

// Key insight: const means "constant binding" not "constant value"
// Use Object.freeze() if you need true immutability
