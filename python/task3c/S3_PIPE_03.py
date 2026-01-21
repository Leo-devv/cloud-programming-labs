# S3_PIPE_03 - String normalization pipeline

from functools import reduce
import re

def pipe(*fns):
    return lambda x: reduce(lambda v, fn: fn(v), fns, x)

# Pipeline steps
strip_ws = lambda s: s.strip()
lowercase = lambda s: s.lower()
collapse_spaces = lambda s: re.sub(r'\s+', ' ', s)

normalize = pipe(strip_ws, lowercase, collapse_spaces)

# Test
test_str = "  Ala   Ma   Kota  "
print(f"Input: '{test_str}'")
print(f"Output: '{normalize(test_str)}'")
