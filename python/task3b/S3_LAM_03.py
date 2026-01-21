# S3_LAM_03 - Closure factory

def make_adder(x):
    return lambda n: n + x

add10 = make_adder(10)
add3 = make_adder(3)

print(f"add10(5) = {add10(5)}")
print(f"add10(20) = {add10(20)}")
print(f"add3(5) = {add3(5)}")
print(f"add3(7) = {add3(7)}")
