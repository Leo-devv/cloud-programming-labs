# S2_LIST_06 - Transform records

users = [
    {"id": 1, "name": "alice", "active": True},
    {"id": 2, "name": "bob", "active": False},
    {"id": 3, "name": "charlie", "active": True},
    {"id": 4, "name": "diana", "active": True}
]

# Names of active users, uppercased, sorted A-Z
result = sorted([u["name"].upper() for u in users if u["active"]])

print("Active users (uppercased, sorted):")
print(result)
