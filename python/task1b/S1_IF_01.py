# S1_IF_01 - Shipping cost

def shipping_cost(weight_kg, is_member):
    # Validate weight
    if not isinstance(weight_kg, (int, float)) or weight_kg <= 0:
        return None

    # Calculate base cost
    if weight_kg <= 1:
        cost = 10
    elif weight_kg <= 5:
        cost = 20
    else:
        cost = 30

    # Member discount 20%
    if is_member:
        cost *= 0.8

    return cost

# Tests with boundary values
tests = [
    (0.5, False),
    (1, False),    # boundary
    (1, True),
    (1.1, False),  # just over 1kg
    (5, False),    # boundary
    (5, True),
    (5.1, False),  # just over 5kg
    (10, True),
    (-1, False),   # invalid
    ("abc", False) # invalid
]

print(f"{'weight':<8} {'member':<8} {'cost'}")
print("-" * 28)
for weight, member in tests:
    result = shipping_cost(weight, member)
    print(f"{str(weight):<8} {str(member):<8} {result}")
