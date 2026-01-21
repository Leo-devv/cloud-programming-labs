# S3_DICT_02 - Merge defaults (shallow)

def merge_defaults(defaults, overrides):
    # Python 3.9+ syntax: defaults | overrides
    # For compatibility: {**defaults, **overrides}
    return {**defaults, **overrides}

# Tests
defaults = {"a": 1, "b": 2, "nested": {"x": 10}}
overrides = {"b": 99, "c": 3, "nested": {"y": 20}}

merged = merge_defaults(defaults, overrides)
print(f"defaults: {defaults}")
print(f"overrides: {overrides}")
print(f"merged: {merged}")

# Note: this is SHALLOW merge - nested dict is replaced, not merged
print(f"\nShallow merge: nested dict was replaced, not merged")
print(f"merged['nested'] = {merged['nested']}")  # only has y, not x
