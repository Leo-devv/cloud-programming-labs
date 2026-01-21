# S3_PIPE_01 - Implement pipe(*fns)

from functools import reduce

def pipe(*fns):
    return lambda x: reduce(lambda v, fn: fn(v), fns, x)

# Test with numeric transforms
add_one = lambda x: x + 1
double = lambda x: x * 2
square = lambda x: x * x

pipeline = pipe(add_one, double, square)

# pipe(add_one, double, square)(3) = square(double(add_one(3)))
# = square(double(4)) = square(8) = 64
print(f"pipe(add_one, double, square)(3) = {pipeline(3)}")
print(f"  3 -> +1 -> 4 -> *2 -> 8 -> ^2 -> 64")

print(f"\npipe(double, add_one)(5) = {pipe(double, add_one)(5)}")
