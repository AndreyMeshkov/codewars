// Playing with passphrases

// https://www.codewars.com/kata/559536379512a64472000053

// Everyone knows passphrases. One can choose passphrases from poems, songs, movies names and so on but frequently they can be guessed due to common cultural references. You can get your passphrases stronger by different means. One is the following:

// choose a text in capital letters including or not digits and non alphabetic characters,

// shift each letter by a given number but the transformed letter must be a letter (circular shift),
// replace each digit by its complement to 9,
// keep such as non alphabetic and non digit characters,
// downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
// reverse the whole result.
// #Example:

// your text: "BORN IN 2015!", shift 1

// 1 + 2 + 3 -> "CPSO JO 7984!"

// 4 "CpSo jO 7984!"

// 5 "!4897 Oj oSpC"

// With longer passphrases it's better to have a small and easy program. Would you write it?

// https://en.wikipedia.org/wiki/Passphrase

function playPass(s, n) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const arr = s.toLowerCase().split("");
  for (let i = 0; i < arr.length; i++) {
    if (alphabet.includes(arr[i])) {
      if (alphabet.indexOf(arr[i]) + n > 25) {
        arr[i] = alphabet[alphabet.indexOf(arr[i]) + n - 26];
      } else {
        arr[i] = alphabet[alphabet.indexOf(arr[i]) + n];
      }
      if (i % 2 === 0) {
        arr[i] = arr[i].toUpperCase();
      }
    } else if (Number.isInteger(+arr[i]) && arr[i] !== " ") {
      arr[i] = (9 - +arr[i]).toString();
    }
  }
  return arr.reverse().join("");
}

// Best practice and clever solution:

// function playPass(s, n) {
//   return s
//     .replace(/[A-Z]/g, function(char) {
//       return String.fromCharCode((char.charCodeAt(0) - 65 + n) % 26 + 65);
//     })
//     .replace(/[a-z]/g, function(char) {
//       return String.fromCharCode((char.charCodeAt(0) - 97 + n) % 26 + 97);
//     })
//     .replace(/\d/g, function(digit) {
//       return 9 - digit;
//     })
//     .replace(/(.)(.?)/g, function(match, odd, even) {
//       return odd.toUpperCase() + even.toLowerCase();
//     })
//     .split('').reverse().join('');
// }
