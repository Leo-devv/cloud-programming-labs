# S3_DICT_01 - Safe get by dotted path

def get_path(obj, path, fallback=None):
    keys = path.split(".")
    current = obj

    for key in keys:
        if not isinstance(current, dict) or key not in current:
            return fallback
        current = current[key]

    return current

# Tests
user = {
    "name": "Leo",
    "address": {
        "city": "Warsaw",
        "zip": "00-001"
    }
}

print(get_path(user, "name"))
print(get_path(user, "address.city"))
print(get_path(user, "address.country"))
print(get_path(user, "foo.bar", "default"))
