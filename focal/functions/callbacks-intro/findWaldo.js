const findWaldo = function(names, found) {
  const indexArray = [];
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name === "Waldo") {
      indexArray.push(i);   // execute callback
    }
  }
  found(indexArray)
}


const actionWhenFound = function(indexArray) {
  console.log(`Found him at index ${indexArray}!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

/*refactor to use forEach()


const findWaldo = function(names, found) {
  const indexArray = [];
  names.forEach((name, index) => {
    if (name === "Waldo") {
      indexArray.push(i);   // execute callback
    }
  });
  found(indexArray)
}

const actionWhenFound = function(indexArray) {
  console.log(`Found him at index ${indexArray}!`);
}
*/
