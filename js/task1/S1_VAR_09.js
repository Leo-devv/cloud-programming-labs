// S1_VAR_09 - typeof undeclared
// unlike accessing an undeclared var, typeof won't throw

// this would crash: console.log(someUndeclaredName)
// but typeof is safe:
console.log("typeof someUndeclaredName:", typeof someUndeclaredName);

// useful for checking globals
if (typeof window === "undefined") {
  console.log("we're in Node, no window here");
} else {
  console.log("running in browser");
}
