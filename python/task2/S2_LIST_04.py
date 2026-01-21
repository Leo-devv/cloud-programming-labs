# S2_LIST_04 - Flatten one level (no itertools)

def flatten1(lst):
    result = []
    for item in lst:
        if isinstance(item, list):
            for sub in item:
                result.append(sub)
        else:
            result.append(item)
    return result

# Tests
print(flatten1([[1, 2], [3, 4]]))
print(flatten1([1, [2, 3], 4]))
print(flatten1([[1], [2], [3]]))
print(flatten1([1, 2, 3]))
print(flatten1([]))
print(flatten1([[1, [2, 3]], 4]))  # only one level
