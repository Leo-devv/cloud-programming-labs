# S1_VAR_09 - Type hints are not runtime enforcement

def add(a: int, b: int) -> int:
    return a + b

# Works with ints as expected
print(f"add(1, 2) = {add(1, 2)}")

# Also works with strings - no runtime error!
print(f"add('hello', ' world') = {add('hello', ' world')}")

# Works with lists too
print(f"add([1,2], [3,4]) = {add([1, 2], [3, 4])}")

# Type hints are for tooling (linters, IDEs) and readability.
# Python does NOT enforce them at runtime - they're just annotations.
