# S1_VAR_06 - Safe conversion: int() / float()

def to_int_or_none(s):
    if s is None:
        return None
    try:
        return int(s)
    except (ValueError, TypeError):
        return None

# tests
test_values = ["12", " 12 ", "12x", "", None]

print(f"{'Input':<12} {'Result'}")
print("-" * 25)
for v in test_values:
    result = to_int_or_none(v)
    print(f"{repr(v):<12} {result}")
