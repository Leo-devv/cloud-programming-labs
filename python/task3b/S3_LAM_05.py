# S3_LAM_05 - Higher-order predicate

def at_least(min_value):
    return lambda x: x >= min_value

# Tests
at_least_10 = at_least(10)
print(f"at_least_10(15) = {at_least_10(15)}")
print(f"at_least_10(5) = {at_least_10(5)}")
print(f"at_least_10(10) = {at_least_10(10)}")

# Use with filter
nums = [5, 10, 15, 3, 8, 20, 2]
filtered = list(filter(at_least(10), nums))
print(f"\nNumbers >= 10 from {nums}: {filtered}")
