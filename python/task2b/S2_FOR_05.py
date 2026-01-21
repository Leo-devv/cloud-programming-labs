# S2_FOR_05 - Multiplication table 10x10

print("10x10 Multiplication Table:\n")

# Header
header = "    "
for j in range(1, 11):
    header += f"{j:4}"
print(header)
print("-" * 45)

# Rows
for i in range(1, 11):
    row = f"{i:2} |"
    for j in range(1, 11):
        row += f"{i * j:4}"
    print(row)
