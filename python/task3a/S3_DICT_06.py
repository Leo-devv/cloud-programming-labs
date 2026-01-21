# S3_DICT_06 - Group by property

def group_by(items, key):
    result = {}
    for item in items:
        group_key = item.get(key)
        if group_key not in result:
            result[group_key] = []
        result[group_key].append(item)
    return result

# Tests
users = [
    {"name": "Alice", "role": "admin"},
    {"name": "Bob", "role": "user"},
    {"name": "Charlie", "role": "admin"},
    {"name": "Diana", "role": "user"}
]

grouped = group_by(users, "role")
print("Grouped by role:")
for role, members in grouped.items():
    print(f"  {role}: {members}")
