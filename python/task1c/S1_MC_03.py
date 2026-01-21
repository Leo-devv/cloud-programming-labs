# S1_MC_03 - Simple calculator using match/case (Python 3.10+)

def calc(a, op, b):
    # Validate numbers
    if not isinstance(a, (int, float)) or not isinstance(b, (int, float)):
        return None

    match op:
        case "+":
            return a + b
        case "-":
            return a - b
        case "*":
            return a * b
        case "/":
            if b == 0:
                return None
            return a / b
        case _:
            return None

# Tests
tests = [
    (10, "+", 5),
    (10, "-", 5),
    (10, "*", 5),
    (10, "/", 5),
    (10, "/", 0),
    (10, "%", 5),
    ("a", "+", 5),
]

for a, op, b in tests:
    print(f"calc({a}, '{op}', {b}): {calc(a, op, b)}")
