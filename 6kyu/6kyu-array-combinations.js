// Array combinations

// https://www.codewars.com/kata/59e66e48fc3c499ec5000103

// In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possiblites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

// See test cases for more examples.

// Good luck!

// If you like this Kata, please try:

// Sum of integer combinations

// Sum of array singles

function solve(arr) {
  return arr
    .map((val) => unique(val))
    .reduce((acc, cur) => acc * cur.length, 1);
}

function unique(arr) {
  arr = arr.sort();
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// Best Practices:

// const solve = a => a.map( v => new Set(v).size ).reduce( (v,w) => v*w , 1 ) ;
