// S3_OBJ_01 - Safe read
// access nested properties without crashing

function get(obj, path, fallback) {
  const keys = path.split(".");
  let current = obj;

  for (const key of keys) {
    if (current === null || current === undefined || !(key in current)) {
      return fallback;
    }
    current = current[key];
  }

  return current;
}

// tests
const data = {
  user: {
    name: "Leo",
    address: {
      city: "Warsaw"
    }
  }
};

console.log(get(data, "user.name", "N/A"));           // "Leo"
console.log(get(data, "user.address.city", "N/A"));   // "Warsaw"
console.log(get(data, "user.address.zip", "N/A"));    // "N/A"
console.log(get(data, "user.phone", "N/A"));          // "N/A"
console.log(get(data, "something.else", "default"));  // "default"
console.log(get(null, "a.b", "fallback"));            // "fallback"
