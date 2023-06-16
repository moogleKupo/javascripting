let diceRoll = function(number) {
let result = [];
result.length = number;
for (let i = 0; i < result.length; i++) {
  result[i] = Math.floor(Math.random() * 6) + 1;
  }
return result.join( ', ');
}

console.log(diceRoll(7));