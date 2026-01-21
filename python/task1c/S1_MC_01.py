# S1_MC_01 - Day name using match/case (Python 3.10+)

def day_name(n: int):
    match n:
        case 1: return "Monday"
        case 2: return "Tuesday"
        case 3: return "Wednesday"
        case 4: return "Thursday"
        case 5: return "Friday"
        case 6: return "Saturday"
        case 7: return "Sunday"
        case _: return None

# Tests
for i in range(0, 9):
    print(f"day_name({i}): {day_name(i)}")
