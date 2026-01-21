// S1_VAR_08 - Big integers
// Numbers beyond MAX_SAFE_INTEGER lose precision, use BigInt for exact math

function safeAdd(a, b) {
  const needsBigInt =
    Math.abs(a) >= Number.MAX_SAFE_INTEGER ||
    Math.abs(b) >= Number.MAX_SAFE_INTEGER;

  if (needsBigInt) {
    const result = BigInt(a) + BigInt(b);
    console.log(`  -> Used BigInt (returned type: bigint)`);
    return result;
  }

  console.log(`  -> Used Number (returned type: number)`);
  return a + b;
}

// Test cases
console.log("Testing safeAdd():\n");

console.log("safeAdd(10, 20):");
console.log("  =", safeAdd(10, 20));

console.log("\nsafeAdd(Number.MAX_SAFE_INTEGER, 1):");
console.log("  =", safeAdd(Number.MAX_SAFE_INTEGER, 1));

console.log("\nsafeAdd(9007199254740991, 9007199254740991):");
console.log("  =", safeAdd(9007199254740991, 9007199254740991));

// Show why this matters
console.log("\n--- Why BigInt matters ---");
console.log("MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);
console.log("MAX_SAFE_INTEGER + 1 (Number):", Number.MAX_SAFE_INTEGER + 1);
console.log("MAX_SAFE_INTEGER + 2 (Number):", Number.MAX_SAFE_INTEGER + 2);
console.log("Notice: +1 and +2 give the same result (precision loss)");
