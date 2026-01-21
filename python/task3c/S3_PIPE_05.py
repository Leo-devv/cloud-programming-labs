# S3_PIPE_05 - Log line pipeline (parse -> filter -> extract)

import re

def parse_log_line(line):
    match = re.match(r'(\w+):\s*user=(\d+)\s+action=(\w+)', line)
    if match:
        return {
            "level": match.group(1),
            "user_id": int(match.group(2)),
            "action": match.group(3)
        }
    return None

def parse_all(lines):
    return [parse_log_line(line) for line in lines if parse_log_line(line)]

def filter_info(entries):
    return [e for e in entries if e["level"] == "INFO"]

def extract_user_ids(entries):
    return [e["user_id"] for e in entries]

# Test data
logs = [
    "INFO: user=42 action=login",
    "ERROR: user=13 action=fail",
    "INFO: user=7 action=view",
    "DEBUG: user=99 action=test",
    "INFO: user=123 action=logout",
    "invalid line"
]

print("Log lines:")
for line in logs:
    print(f"  {line}")

# Pipeline
parsed = parse_all(logs)
info_only = filter_info(parsed)
user_ids = extract_user_ids(info_only)

print(f"\nINFO user IDs: {user_ids}")
