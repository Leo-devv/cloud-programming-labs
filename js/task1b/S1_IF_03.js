// S1_IF_03 - Truthy/falsy guard

function normalizeName(input) {
  if (!input) return "Anonymous";
  return input.trim();
}

// tests
console.log('normalizeName(""):', normalizeName(""));           // Anonymous
console.log('normalizeName(" "):', normalizeName(" "));         // "" (empty after trim)
console.log('normalizeName(null):', normalizeName(null));       // Anonymous
console.log('normalizeName(" Ola "):', normalizeName(" Ola ")); // "Ola"
console.log('normalizeName(undefined):', normalizeName(undefined)); // Anonymous
console.log('normalizeName(0):', normalizeName(0));             // Anonymous (0 is falsy)
