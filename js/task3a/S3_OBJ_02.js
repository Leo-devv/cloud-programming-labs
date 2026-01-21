// S3_OBJ_02 - Merge config
// shallow merge, overrides win, don't mutate inputs

function mergeDefaults(defaults, overrides) {
  const result = {};

  // copy defaults first
  for (const key in defaults) {
    result[key] = defaults[key];
  }

  // overrides win
  for (const key in overrides) {
    result[key] = overrides[key];
  }

  return result;
}

// tests
const defaults = { theme: "light", lang: "en", debug: false };
const overrides = { theme: "dark", debug: true };

const config = mergeDefaults(defaults, overrides);
console.log(config);
// { theme: "dark", lang: "en", debug: true }

// verify no mutation
console.log("defaults unchanged:", defaults);
console.log("overrides unchanged:", overrides);
