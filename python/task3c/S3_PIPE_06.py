# S3_PIPE_06 - Safe pipeline (pipe_safe)

def pipe_safe(*fns):
    def run(x):
        result = x
        for fn in fns:
            try:
                result = fn(result)
            except Exception as e:
                return {"ok": False, "error": str(e)}
        return {"ok": True, "value": result}
    return run

# Test functions
double = lambda x: x * 2
add_one = lambda x: x + 1

def must_be_positive(x):
    if x <= 0:
        raise ValueError("Value must be positive")
    return x

# Success case
safe_math = pipe_safe(double, add_one, must_be_positive)
print(f"safe_math(5): {safe_math(5)}")

# Failure case - raises exception
print(f"safe_math(-5): {safe_math(-5)}")

# Another failure case
def parse_int(s):
    return int(s)

safe_parse = pipe_safe(parse_int, double)
print(f"\nsafe_parse('10'): {safe_parse('10')}")
print(f"safe_parse('abc'): {safe_parse('abc')}")
