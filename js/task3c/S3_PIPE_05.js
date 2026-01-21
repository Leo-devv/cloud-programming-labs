// S3_PIPE_05 - Log lines pipeline

const pipe = (...fns) => x => fns.reduce((v, fn) => fn(v), x);

// parse log line into object
const parseLine = line => {
  const match = line.match(/^(\w+):\s*user=(\d+)/);
  if (!match) return null;
  return { level: match[1], userId: parseInt(match[2]) };
};

// pipeline steps
const parseAll = lines => lines.map(parseLine).filter(x => x !== null);
const filterInfo = entries => entries.filter(e => e.level === "INFO");
const extractUserIds = entries => entries.map(e => e.userId);

// the pipeline
const getInfoUserIds = pipe(parseAll, filterInfo, extractUserIds);

// test data
const logs = [
  "INFO: user=42",
  "ERROR: user=13",
  "INFO: user=7",
  "DEBUG: user=99",
  "INFO: user=123",
  "invalid line"
];

console.log("Log lines:", logs);
console.log("INFO user IDs:", getInfoUserIds(logs)); // [42, 7, 123]
