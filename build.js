var readline = require('readline');

setTimeout(() => log(0), 0000)
setTimeout(() => log(1), 1000)
setTimeout(() => log(2), 2000)
setTimeout(() => log(3), 3000)

function log(number) {
  readline.clearLine(process.stdout)
  readline.cursorTo(process.stdout, 0)
  process.stdout.write("Hello, World" + number);
}
