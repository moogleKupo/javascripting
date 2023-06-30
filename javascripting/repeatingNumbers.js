const repeatNumbers = function(data) {
  //need to return a string
  let result = "";
  // for every first number in an array (index 0), concat that number to the string, as many times as index 1
  for (let i = 0; i < data.length; i++){
  let value = data[i][0];
  let repetitions = data[i][1];
  for (let j = 0; j < repetitions; j++) {
    result += value.toString();
    }
  }
return result;
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));