setTimeout(() => log(0), 0000)
setTimeout(() => log(1), 1000)
setTimeout(() => log(2), 2000)
setTimeout(() => log(3), 3000)

function log(number) {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write("Hello, World" + number);
}
