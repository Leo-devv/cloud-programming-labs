// S3_OBJ_05 - Invert
// swap keys and values, handle duplicates

function invert(obj) {
  const result = {};

  for (const key in obj) {
    const val = obj[key];

    if (result[val] === undefined) {
      result[val] = key;
    } else if (Array.isArray(result[val])) {
      result[val].push(key);
    } else {
      result[val] = [result[val], key];
    }
  }

  return result;
}

// tests
console.log(invert({ a: 1, b: 2, c: 3 }));
// { "1": "a", "2": "b", "3": "c" }

console.log(invert({ a: 1, b: 1, c: 2 }));
// { "1": ["a", "b"], "2": "c" }

console.log(invert({ x: "foo", y: "foo", z: "foo" }));
// { foo: ["x", "y", "z"] }

console.log(invert({}));
// {}
