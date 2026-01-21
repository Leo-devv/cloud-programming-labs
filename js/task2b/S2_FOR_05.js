// S2_FOR_05 - Multiplication table

console.log("10x10 Multiplication Table:\n");

// header row
let header = "    ";
for (let i = 1; i <= 10; i++) {
  header += String(i).padStart(4);
}
console.log(header);
console.log("-".repeat(44));

// table rows
for (let row = 1; row <= 10; row++) {
  let line = String(row).padStart(2) + " |";
  for (let col = 1; col <= 10; col++) {
    line += String(row * col).padStart(4);
  }
  console.log(line);
}
