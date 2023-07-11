const characters = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let delay = 100;

for (const character of characters) {
  setTimeout(() => {
    process.stdout.write(`\r${character}   `);
  }, delay);
  delay += 300;
}