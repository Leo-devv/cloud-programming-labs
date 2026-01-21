# S3_DICT_03 - Pick keys

def pick(d, keys):
    return {k: d[k] for k in keys if k in d}

# Tests
user = {"name": "Leo", "age": 25, "email": "leo@test.com", "password": "secret"}

print(pick(user, ["name", "email"]))
print(pick(user, ["name", "missing"]))
print(pick(user, []))
print(pick({}, ["a", "b"]))
