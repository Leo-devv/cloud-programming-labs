// S2_ARR_06 - Transform records
// filter active users, uppercase names, sort A-Z

function getActiveUserNames(users) {
  return users
    .filter(u => u.active)
    .map(u => u.name.toUpperCase())
    .sort();
}

// test data
const users = [
  { id: 1, name: "alice", active: true },
  { id: 2, name: "bob", active: false },
  { id: 3, name: "charlie", active: true },
  { id: 4, name: "diana", active: true },
  { id: 5, name: "eve", active: false }
];

console.log(getActiveUserNames(users));
// ["ALICE", "CHARLIE", "DIANA"]

console.log(getActiveUserNames([]));
// []

console.log(getActiveUserNames([{ id: 1, name: "zoe", active: false }]));
// []
