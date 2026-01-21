// S3_PIPE_03 - String normalization pipeline

const pipe = (...fns) => x => fns.reduce((v, fn) => fn(v), x);

// individual transforms
const trim = s => s.trim();
const lowercase = s => s.toLowerCase();
const normalizeSpaces = s => s.replace(/\s+/g, " ");

// the pipeline
const normalizeString = pipe(trim, lowercase, normalizeSpaces);

// tests
console.log(normalizeString("  Hello   World  "));       // "hello world"
console.log(normalizeString("  LOTS    OF   SPACES  ")); // "lots of spaces"
console.log(normalizeString("Already Normal"));          // "already normal"
console.log(normalizeString("   "));                      // ""
