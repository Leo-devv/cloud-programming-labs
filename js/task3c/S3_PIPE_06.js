// S3_PIPE_06 - Safe pipeline
// catches errors and returns { ok, value/error }

const pipeSafe = (...fns) => x => {
  let result = x;

  for (const fn of fns) {
    try {
      result = fn(result);
    } catch (err) {
      return { ok: false, error: err.message };
    }
  }

  return { ok: true, value: result };
};

// test functions
const double = x => x * 2;
const addOne = x => x + 1;
const mustBePositive = x => {
  if (x <= 0) throw new Error("Value must be positive");
  return x;
};
const parseJSON = s => JSON.parse(s);

// success case
const safeMath = pipeSafe(double, addOne, mustBePositive);
console.log("safeMath(5):", safeMath(5));  // { ok: true, value: 11 }

// failure case
console.log("safeMath(-5):", safeMath(-5)); // { ok: false, error: "Value must be positive" }

// json parsing
const safeParseAndDouble = pipeSafe(parseJSON, x => x.value, double);
console.log('safeParseAndDouble(\'{"value": 10}\'):', safeParseAndDouble('{"value": 10}'));
console.log('safeParseAndDouble("bad json"):', safeParseAndDouble("bad json"));
