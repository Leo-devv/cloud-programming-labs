# S2_LIST_02 - Deduplicate without set

def unique(values):
    result = []
    for v in values:
        if v not in result:
            result.append(v)
    return result

# Tests - no set() used
print(unique([1, 2, 2, 3, 1, 4]))
print(unique(["a", "b", "a", "c", "b"]))
print(unique([1, 1, 1, 1]))
print(unique([]))
