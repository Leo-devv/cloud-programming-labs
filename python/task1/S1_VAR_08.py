# S1_VAR_08 - Big integers (no MAX_SAFE_INTEGER problem)

big_int = 10**100
print(f"10**100 = {big_int}")
print(f"Type: {type(big_int).__name__}")
print(f"Number of digits: {len(str(big_int))}")
print()

# Compare with float
big_float = float(10**100)
print(f"float(10**100) = {big_float}")
print(f"Type: {type(big_float).__name__}")

# Precision comparison
print()
print("Precision issue with floats:")
print(f"10**100 + 1 (int): {10**100 + 1}")
print(f"float(10**100) + 1: {float(10**100) + 1}")
# Floats lose precision for very large numbers
