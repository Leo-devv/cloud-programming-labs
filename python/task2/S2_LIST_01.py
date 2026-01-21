# S2_LIST_01 - Clean number strings

def clean_numbers(values):
    result = []
    for v in values:
        try:
            trimmed = v.strip()
            result.append(float(trimmed))
        except (ValueError, AttributeError):
            pass
    return result

# Tests
tests = [
    [" 1 ", "x", "2"],
    ["  3.14  ", "abc", "  42  "],
    ["", "  ", "5"],
    []
]

for t in tests:
    print(f"{t} -> {clean_numbers(t)}")
