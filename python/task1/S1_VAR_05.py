# S1_VAR_05 - Truthiness

def is_truthy(v):
    return bool(v)

test_values = [0, 1, "", "0", [], [0], {}, None]

print(f"{'Value':<12} {'Truthy?'}")
print("-" * 22)
for v in test_values:
    print(f"{repr(v):<12} {is_truthy(v)}")
