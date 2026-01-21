# S1_VAR_04 - Identity vs equality (is vs ==)

# == checks value equality, is checks identity (same object in memory)

a = [1, 2, 3]
b = [1, 2, 3]
c = a

print(f"a = {a}")
print(f"b = {b}")
print(f"c = a")
print()
print(f"a == b: {a == b}")  # True - same values
print(f"a is b: {a is b}")  # False - different objects
print(f"a is c: {a is c}")  # True - same object
print()

# Correct use of 'is None'
x = None
print(f"x is None: {x is None}")  # Correct way to check for None
print(f"x == None: {x == None}")  # Works but not recommended

# Use is for identity (None, True, False), == for equality
