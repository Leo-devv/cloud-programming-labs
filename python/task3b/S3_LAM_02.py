# S3_LAM_02 - Sort by key

people = [
    {"name": "Charlie", "age": 35},
    {"name": "Alice", "age": 25},
    {"name": "Bob", "age": 30}
]

print("Before:")
for p in people:
    print(f"  {p}")

sorted_people = sorted(people, key=lambda p: p["age"])

print("\nAfter (sorted by age):")
for p in sorted_people:
    print(f"  {p}")
