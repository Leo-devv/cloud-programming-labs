# S1_IF_03 - Normalize user name

def normalize_name(x):
    if not x:
        return "Anonymous"
    if not isinstance(x, str):
        return "Anonymous"

    stripped = x.strip()
    if not stripped:
        return "Anonymous"

    return stripped

# Tests
tests = ["", " ", None, " Ola ", "  Bob  ", 123, "Alice"]

print(f"{'input':<12} {'result'}")
print("-" * 28)
for t in tests:
    print(f"{repr(t):<12} '{normalize_name(t)}'")
