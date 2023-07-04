const camelCase = function(input) {
// go through the string and for every index after a space, change to upper case
let camelString = "";
for (let i = 0; i < input.length; i++){
    if (input[i] === " "){
camelString += input[i + 1].toUpperCase();
i++;
  } else {
  camelString += input[i];
    }
  }
  return camelString;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));