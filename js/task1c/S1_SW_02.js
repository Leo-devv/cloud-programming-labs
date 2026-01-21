// S1_SW_02 - Command router

function runCommand(cmd) {
  switch (cmd) {
    case "start":
      return "Starting the service...";
    case "stop":
      return "Stopping the service...";
    case "status":
      return "Service is running";
    default:
      return "Unknown command: " + cmd;
  }
}

// tests
console.log(runCommand("start"));
console.log(runCommand("stop"));
console.log(runCommand("status"));
console.log(runCommand("restart"));
console.log(runCommand(""));
