let joinList = function(arr) {
  let result = "";
  for (let i = 0; i < arr.length - 1; i++) {
    result += String(arr[i]) + ", ";
  }
  result += arr[arr.length - 1];
  return result;
};
// Test / Driver Code below...
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);