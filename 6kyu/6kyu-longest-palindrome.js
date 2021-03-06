// longest_palindrome;

// https://www.codewars.com/kata/54bb6f887e5a80180900046b

// Longest Palindrome
// Find the length of the longest substring in the given string s that is the same in reverse.

// As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

// If the length of the input string is 0, the return value must be 0.

// Example:
// "a" -> 1
// "aab" -> 2
// "abcde" -> 1
// "zzbaabcd" -> 4
// "" -> 0

function longestPalindrome(s) {
  if (s.length === 0) return 0;
  let result = 1;
  let word = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = s.length - 1; j > i; j--) {
      if (s[i] === s[j]) {
        word = s.slice(i, j + 1);
        if (word.length > result) {
          if (word === word.split("").reverse().join("")) {
            result = word.length;
          }
        }
      }
    }
  }
  return result;
}

// Best practice and clever solution:

// var longestPalindrome=function(s){
//   if (!s) return 0;
//   for (let c = s.length; c > 0; c--) {
//     for (let i = 0; i <= s.length - c; i++) {
//       var check = s.substr(i, c);
//       if (check === check.split("").reverse().join("")) return c;
//     }
//   }
// }
