// S3_PIPE_04 - Array processing pipeline

const pipe = (...fns) => x => fns.reduce((v, fn) => fn(v), x);

// transforms
const filterValid = arr => arr.filter(x => x !== null && x !== undefined && x !== "");
const toNumbers = arr => arr.map(x => Number(x)).filter(n => !Number.isNaN(n));
const double = arr => arr.map(x => x * 2);
const sum = arr => arr.reduce((a, b) => a + b, 0);

// the pipeline
const processNumbers = pipe(filterValid, toNumbers, double, sum);

// tests
const input1 = ["1", "2", null, "3", "", "invalid", "4"];
console.log("Input:", input1);
console.log("Result:", processNumbers(input1)); // (1+2+3+4)*2 = 20

const input2 = ["10", "20", "30"];
console.log("\nInput:", input2);
console.log("Result:", processNumbers(input2)); // 120
