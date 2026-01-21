# Cloud Programming Labs

This repository contains my JavaScript exercises for the Cloud Programming course. Each exercise is organized by topic and follows the course submission guidelines.

## Prerequisites

- Node.js (v18+ recommended)
- Any text editor or online IDE (Replit, CodeSandbox, StackBlitz)

## Folder Structure

```
js/
├── task1/      Variables & Types      (S1_VAR_01 - S1_VAR_10)
├── task1b/     Conditionals (if)      (S1_IF_01 - S1_IF_03)
├── task1c/     Switch statements      (S1_SW_01 - S1_SW_03)
├── task2/      Array operations       (S2_ARR_01 - S2_ARR_06)
├── task2b/     Loops (for, for..of)   (S2_FOR_01 - S2_FOR_06)
├── task3a/     Objects & iteration    (S3_OBJ_01 - S3_OBJ_06)
├── task3b/     Arrow functions        (S3_FN_01 - S3_FN_06)
└── task3c/     Pipelines & compose    (S3_PIPE_01 - S3_PIPE_06)
```

## Topics Covered

### Stage 1 — Variables, Types, Conditionals
- `var`, `let`, `const` and their scoping rules
- Type checking with `typeof`, handling `null`, `NaN`, and `undefined`
- Type coercion and BigInt for large numbers
- Conditional logic with `if/else` and `switch`

### Stage 2 — Arrays & Loops
- Array manipulation: filtering, chunking, flattening, deduplication
- Statistical operations (min, max, avg)
- Loop constructs: `for`, `for..of`, nested loops
- Building frequency maps and lookup tables

### Stage 3 — Objects, Functions & Pipelines
- Safe property access, shallow merging, pick/omit patterns
- Object inversion and grouping
- Arrow function syntax and closures
- Higher-order functions: `map`, `filter`, `reduce`
- Function composition with `pipe()` and `compose()`

## Running an Exercise

```bash
node js/task1/S1_VAR_01.js
```

Each file is self-contained and prints output to verify correctness.

## Commit Convention

Following course guidelines, commits use this format:

```
TASK<N>: <EXERCISE_ID> - description
```

Examples:
- `TASK1: S1_VAR_01 - variable declarations with type table`
- `TASK2: S2_ARR_03 - chunk array into groups of N`
- `TASK3C: S3_PIPE_01 - left-to-right function composition`

## License

Educational use only.
