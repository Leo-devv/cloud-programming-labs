// S3_OBJ_06 - Group by
// group items by a property value

function groupBy(items, key) {
  const result = {};

  for (const item of items) {
    const groupKey = item[key];

    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
  }

  return result;
}

// tests
const people = [
  { name: "Alice", city: "NYC" },
  { name: "Bob", city: "LA" },
  { name: "Charlie", city: "NYC" },
  { name: "Diana", city: "LA" }
];

console.log(groupBy(people, "city"));
// {
//   NYC: [{ name: "Alice", city: "NYC" }, { name: "Charlie", city: "NYC" }],
//   LA: [{ name: "Bob", city: "LA" }, { name: "Diana", city: "LA" }]
// }

const products = [
  { name: "Apple", category: "fruit" },
  { name: "Carrot", category: "vegetable" },
  { name: "Banana", category: "fruit" }
];

console.log(groupBy(products, "category"));
