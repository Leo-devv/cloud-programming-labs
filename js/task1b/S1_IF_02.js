// S1_IF_02 - Score to grade

function grade(score) {
  if (score < 0 || score > 100) return null;

  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

// tests
console.log("grade(95):", grade(95));   // A
console.log("grade(85):", grade(85));   // B
console.log("grade(75):", grade(75));   // C
console.log("grade(65):", grade(65));   // D
console.log("grade(55):", grade(55));   // F
console.log("grade(0):", grade(0));     // F
console.log("grade(100):", grade(100)); // A
console.log("grade(-5):", grade(-5));   // null
console.log("grade(101):", grade(101)); // null
