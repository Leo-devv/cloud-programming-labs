# S3_DICT_05 - Invert with collisions

def invert(d):
    result = {}
    for key, value in d.items():
        if value in result:
            if isinstance(result[value], list):
                result[value].append(key)
            else:
                result[value] = [result[value], key]
        else:
            result[value] = key
    return result

# Tests
print(invert({"a": 1, "b": 2, "c": 3}))
print(invert({"a": 1, "b": 1, "c": 2}))  # collision
print(invert({"x": "foo", "y": "bar"}))
print(invert({}))
