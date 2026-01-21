# S1_VAR_03 - Mutability: list vs tuple

# List is mutable - can modify elements
lst = [1, 2, 3]
print(f"list before: {lst}")
lst[0] = 99
print(f"list after lst[0] = 99: {lst}")

# Tuple is immutable - cannot modify elements
tup = (1, 2, 3)
print(f"\ntuple: {tup}")
try:
    tup[0] = 99
except TypeError as e:
    print(f"Error when trying tup[0] = 99: {e}")

# Lists are mutable because they're designed for collections that change.
# Tuples are immutable for data integrity and can be used as dict keys.
