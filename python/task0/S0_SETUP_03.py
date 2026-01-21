# S0_SETUP_03 - Minimal test helper

def eq(actual, expected):
    if actual != expected:
        raise AssertionError(f"Expected {expected!r}, got {actual!r}")
    return True

# tests
eq(1 + 1, 2)
eq("hello".upper(), "HELLO")
eq([1, 2, 3][0], 1)

print("All eq() tests passed!")
