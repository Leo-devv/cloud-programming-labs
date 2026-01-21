# S3_PIPE_04 - Iterable pipeline (generator-based)

def strip_all(items):
    for item in items:
        yield item.strip()

def to_float_safe(items):
    for item in items:
        try:
            yield float(item)
        except ValueError:
            pass  # skip failures

def double_all(items):
    for item in items:
        yield item * 2

# Pipeline: strip -> convert to float (skip failures) -> double -> sum
input_data = ["  1  ", "abc", "  2.5  ", "xyz", "  3  "]

print(f"Input: {input_data}")

# Using generators - memory efficient for large inputs
stripped = strip_all(input_data)
floats = to_float_safe(stripped)
doubled = double_all(floats)
result = sum(doubled)

print(f"Result (strip -> float -> double -> sum): {result}")
# (1 + 2.5 + 3) * 2 = 13.0
