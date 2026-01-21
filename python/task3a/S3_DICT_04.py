# S3_DICT_04 - Omit keys

def omit(d, keys):
    return {k: v for k, v in d.items() if k not in keys}

# Tests
user = {"name": "Leo", "age": 25, "email": "leo@test.com", "password": "secret"}

print(omit(user, ["password"]))
print(omit(user, ["password", "email"]))
print(omit(user, ["missing"]))
print(omit(user, []))
