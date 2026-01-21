# S1_VAR_02 - Rebinding and dynamic typing

x = 42
print(f"x = {x}, type: {type(x).__name__}")

x = "hello"
print(f"x = {x}, type: {type(x).__name__}")

x = [1, 2, 3]
print(f"x = {x}, type: {type(x).__name__}")

x = {"key": "value"}
print(f"x = {x}, type: {type(x).__name__}")

# Dynamic typing means variables don't have fixed types.
# The same variable name can be rebound to values of different types at runtime.
