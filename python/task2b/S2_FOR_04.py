# S2_FOR_04 - Count occurrences (histogram) - no Counter

def count_occurrences(values):
    counts = {}
    for v in values:
        if v in counts:
            counts[v] += 1
        else:
            counts[v] = 1
    return counts

# Tests
print(count_occurrences(["a", "b", "a", "c", "b", "a"]))
print(count_occurrences([1, 2, 2, 3, 3, 3]))
print(count_occurrences([]))
print(count_occurrences(["x"]))
