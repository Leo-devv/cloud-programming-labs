# S1_VAR_01 - Catalog of values and type()

my_int = 42
my_float = 3.14
my_str = "hello"
my_bool = True
my_none = None
my_list = [1, 2, 3]
my_tuple = (1, 2, 3)
my_dict = {"a": 1}
my_set = {1, 2, 3}
my_func = lambda x: x

values = [
    ("my_int", my_int),
    ("my_float", my_float),
    ("my_str", my_str),
    ("my_bool", my_bool),
    ("my_none", my_none),
    ("my_list", my_list),
    ("my_tuple", my_tuple),
    ("my_dict", my_dict),
    ("my_set", my_set),
    ("my_func", my_func),
]

print(f"{'Name':<12} {'Value':<20} {'type(x)':<25} {'type(x).__name__'}")
print("-" * 75)
for name, val in values:
    val_str = repr(val) if not callable(val) else "<function>"
    print(f"{name:<12} {val_str:<20} {str(type(val)):<25} {type(val).__name__}")
