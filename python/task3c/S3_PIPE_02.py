# S3_PIPE_02 - Implement compose(*fns)

from functools import reduce

def pipe(*fns):
    return lambda x: reduce(lambda v, fn: fn(v), fns, x)

def compose(*fns):
    return lambda x: reduce(lambda v, fn: fn(v), reversed(fns), x)

# Test functions
add_one = lambda x: x + 1
double = lambda x: x * 2

# Compare pipe vs compose with same functions
print("pipe(add_one, double)(5):")
print(f"  5 -> +1 -> 6 -> *2 -> 12 = {pipe(add_one, double)(5)}")

print("\ncompose(add_one, double)(5):")
print(f"  5 -> *2 -> 10 -> +1 -> 11 = {compose(add_one, double)(5)}")

# compose applies right-to-left, pipe applies left-to-right
