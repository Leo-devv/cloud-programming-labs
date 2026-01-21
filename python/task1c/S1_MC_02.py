# S1_MC_02 - Command router using match/case (Python 3.10+)

def run_command(cmd: str):
    match cmd:
        case "start":
            return "System starting..."
        case "stop":
            return "System stopping..."
        case "status":
            return "System is running"
        case _:
            return "UNKNOWN_COMMAND"

# Tests
commands = ["start", "stop", "status", "restart", "help", ""]

for cmd in commands:
    print(f"run_command('{cmd}'): {run_command(cmd)}")
