// S3_FN_02 - Sort by property
// use arrow function as comparator

const people = [
  { name: "Charlie", age: 35 },
  { name: "Alice", age: 28 },
  { name: "Bob", age: 42 },
  { name: "Diana", age: 31 }
];

// sort by age ascending using arrow comparator
const sortedByAge = [...people].sort((a, b) => a.age - b.age);

console.log("Original:", people.map(p => p.name));
console.log("Sorted by age:", sortedByAge.map(p => `${p.name}(${p.age})`));
