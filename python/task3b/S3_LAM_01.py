# S3_LAM_01 - Convert to lambdas

square = lambda n: n * n
is_odd = lambda n: n % 2 != 0
greet = lambda name: f"Hello, {name}!"

# Tests (3 per lambda)
print("square:")
print(f"  square(2) = {square(2)}")
print(f"  square(5) = {square(5)}")
print(f"  square(0) = {square(0)}")

print("\nis_odd:")
print(f"  is_odd(3) = {is_odd(3)}")
print(f"  is_odd(4) = {is_odd(4)}")
print(f"  is_odd(0) = {is_odd(0)}")

print("\ngreet:")
print(f"  greet('Leo') = {greet('Leo')}")
print(f"  greet('Alice') = {greet('Alice')}")
print(f"  greet('World') = {greet('World')}")
