# S1_VAR_10 - Mini inspector

def inspect(v):
    def is_iterable(x):
        try:
            iter(x)
            return True
        except TypeError:
            return False

    return {
        "type_name": type(v).__name__,
        "is_none": v is None,
        "is_callable": callable(v),
        "is_iterable": is_iterable(v),
        "truthy": bool(v) if v is not None else False
    }

# Test on 10+ values
test_values = [42, 3.14, "hello", True, None, [1,2], (1,2), {"a":1}, {1,2}, lambda x: x, print, 0, ""]

for v in test_values:
    result = inspect(v)
    v_repr = repr(v) if not callable(v) else f"<{type(v).__name__}>"
    print(f"{v_repr}: {result}")
