# S3_LAM_04 - Sum of squares of even numbers

from functools import reduce

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Step by step
evens = list(filter(lambda x: x % 2 == 0, nums))
print(f"1. Filter evens: {evens}")

squares = list(map(lambda x: x * x, evens))
print(f"2. Square them: {squares}")

result = reduce(lambda acc, x: acc + x, squares, 0)
print(f"3. Sum: {result}")

# Or in one line
one_liner = reduce(lambda a, x: a + x, map(lambda x: x*x, filter(lambda x: x % 2 == 0, nums)), 0)
print(f"\nOne-liner result: {one_liner}")
