# S1_VAR_07 - NaN and math.isnan

import math

nan1 = float("nan")

try:
    nan2 = 0.0 / 0.0
except ZeroDivisionError:
    nan2 = float("nan")

print(f"nan1 = float('nan'): {nan1}")
print(f"nan2 (from 0.0/0.0 or fallback): {nan2}")
print()
print(f"nan1 == nan1: {nan1 == nan1}")  # False! NaN != NaN
print(f"nan1 == nan2: {nan1 == nan2}")  # False
print()
print(f"math.isnan(nan1): {math.isnan(nan1)}")
print(f"math.isnan(nan2): {math.isnan(nan2)}")
print(f"math.isnan(42): {math.isnan(42)}")
