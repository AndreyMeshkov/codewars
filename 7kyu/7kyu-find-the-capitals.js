// Find the capitals

// https://www.codewars.com/kata/539ee3b6757843632d00026b

// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

var capitals = function (word) {
  const arr = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      arr.push(i);
    }
  }
  return arr;
};

// Best Practice:

// var capitals = function (word) {
//   var caps = [];
//   for(var i = 0; i < word.length; i++) {
//     if(word[i].toUpperCase() == word[i]) caps.push(i);
//   }
//   return caps;
// };

// Clever solution:

// var capitals = function (word) {
//   return word.split('').reduce(function(memo, v, i) {
//     return v === v.toUpperCase() ? memo.concat(i) : memo;
//   }, []);
// };
