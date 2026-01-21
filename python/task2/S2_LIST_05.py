# S2_LIST_05 - Stats

def stats(nums):
    if not nums:
        return None

    return {
        "min": min(nums),
        "max": max(nums),
        "avg": sum(nums) / len(nums),
        "sum": sum(nums)
    }

# Tests including negative numbers
print(stats([1, 2, 3, 4, 5]))
print(stats([10]))
print(stats([-5, 0, 5, 10]))
print(stats([]))
print(stats([-10, -20, -5]))
