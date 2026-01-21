# S3_PIPE_07 - Optional Bonus: itertools pipeline

import itertools

# Example using itertools.islice and itertools.groupby

# Sample data: log entries
logs = [
    {"level": "INFO", "msg": "Started"},
    {"level": "INFO", "msg": "Processing"},
    {"level": "ERROR", "msg": "Failed"},
    {"level": "INFO", "msg": "Retrying"},
    {"level": "ERROR", "msg": "Failed again"},
    {"level": "INFO", "msg": "Success"},
    {"level": "DEBUG", "msg": "Details"},
]

# Sort by level for groupby (groupby requires sorted input)
sorted_logs = sorted(logs, key=lambda x: x["level"])

# Group logs by level using itertools.groupby
print("Logs grouped by level:")
for level, group in itertools.groupby(sorted_logs, key=lambda x: x["level"]):
    items = list(group)
    print(f"  {level}: {len(items)} entries")

# Use islice to get first 3 items without loading all into memory
print("\nFirst 3 logs using islice:")
for log in itertools.islice(logs, 3):
    print(f"  {log}")

# Generator pipeline with islice for memory efficiency
def generate_numbers():
    n = 0
    while True:
        yield n
        n += 1

# Get items 100-105 from infinite generator - only those items are in memory
print("\nItems 100-105 from infinite generator:")
print(list(itertools.islice(generate_numbers(), 100, 106)))

"""
WHY ITERATOR PIPELINES ARE MORE MEMORY-EFFICIENT:

1. Lazy evaluation: Iterators compute values on-demand, not all at once.
2. No intermediate lists: Each step yields items one by one, not stored.
3. Infinite sequences: Can process infinite data streams (like generate_numbers above).
4. Single pass: Data flows through pipeline without multiple copies.
5. Early termination: Can stop processing with islice without computing everything.
6. Constant memory: Memory usage stays constant regardless of input size.

Example: Processing 1 million items with list uses O(n) memory.
With generators/itertools, it uses O(1) memory - only current item is held.
"""
