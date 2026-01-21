# S2_FOR_02 - Find first even (no next() with generator)

def find_first_even(nums):
    for n in nums:
        if n % 2 == 0:
            return n
    return None

# Tests
print(f"find_first_even([1, 3, 4, 5]): {find_first_even([1, 3, 4, 5])}")
print(f"find_first_even([1, 3, 5, 7]): {find_first_even([1, 3, 5, 7])}")
print(f"find_first_even([2, 4, 6]): {find_first_even([2, 4, 6])}")
print(f"find_first_even([]): {find_first_even([])}")
