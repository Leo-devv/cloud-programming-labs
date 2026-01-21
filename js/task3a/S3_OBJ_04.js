// S3_OBJ_04 - Omit
// return new object without specified keys

function omit(obj, keys) {
  const result = {};
  const keysToOmit = new Set(keys);

  for (const key in obj) {
    if (!keysToOmit.has(key)) {
      result[key] = obj[key];
    }
  }

  return result;
}

// tests
const user = { id: 1, name: "Leo", email: "leo@test.com", password: "secret" };

console.log(omit(user, ["password"]));
// { id: 1, name: "Leo", email: "leo@test.com" }

console.log(omit(user, ["password", "email"]));
// { id: 1, name: "Leo" }

console.log(omit(user, []));
// { id: 1, name: "Leo", email: "leo@test.com", password: "secret" }
