# S3_LAM_06 - Map values in a dict

def map_values(d, fn):
    return {k: fn(v) for k, v in d.items()}

# Tests
prices = {"apple": 1.50, "banana": 0.75, "orange": 2.00}
print(f"Original: {prices}")

doubled = map_values(prices, lambda x: x * 2)
print(f"Doubled: {doubled}")

rounded = map_values(prices, lambda x: round(x))
print(f"Rounded: {rounded}")

scores = {"alice": 85, "bob": 92, "charlie": 78}
passed = map_values(scores, lambda x: "PASS" if x >= 80 else "FAIL")
print(f"\nScores: {scores}")
print(f"Pass/Fail: {passed}")
