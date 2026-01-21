// S3_OBJ_03 - Pick
// return new object with only specified keys

function pick(obj, keys) {
  const result = {};
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }
  return result;
}

// tests
const user = { id: 1, name: "Leo", email: "leo@test.com", password: "secret" };

console.log(pick(user, ["name", "email"]));
// { name: "Leo", email: "leo@test.com" }

console.log(pick(user, ["id", "nonexistent"]));
// { id: 1 }

console.log(pick(user, []));
// {}
