const findWaldo = function(names, found) {
  const indexArray = [];
  names.forEach(function(name, index) {
    if (name === "Waldo") {
      indexArray.push(index);
    }
  });
  found(indexArray);
};

const actionWhenFound = function(indexArray) {
  console.log(`Found him at index ${indexArray}!`);
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);