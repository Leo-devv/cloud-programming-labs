# S2_FOR_06 - Sum nested lists (matrix)

def sum_nested(matrix):
    total = 0
    for row in matrix:
        if not isinstance(row, list):
            return None
        for val in row:
            total += val
    return total

# Tests
matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
print(f"sum_nested(3x3): {sum_nested(matrix1)}")

matrix2 = [[1, 2], [3, 4]]
print(f"sum_nested(2x2): {sum_nested(matrix2)}")

print(f"sum_nested([[]]): {sum_nested([[]])}")
print(f"sum_nested([]): {sum_nested([])}")
print(f"sum_nested([1, [2,3]]): {sum_nested([1, [2, 3]])}")  # invalid row
