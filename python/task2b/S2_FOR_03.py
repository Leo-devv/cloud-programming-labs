# S2_FOR_03 - Sum until threshold

def sum_until(nums, threshold):
    total = 0
    for n in nums:
        if total + n > threshold:
            break
        total += n
    return total

# Tests
print(f"sum_until([1,2,3,4,5], 6): {sum_until([1,2,3,4,5], 6)}")
print(f"sum_until([1,2,3,4,5], 100): {sum_until([1,2,3,4,5], 100)}")
print(f"sum_until([10,20,30], 15): {sum_until([10,20,30], 15)}")
print(f"sum_until([], 10): {sum_until([], 10)}")
