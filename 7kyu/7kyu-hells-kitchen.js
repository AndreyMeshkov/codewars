// Hells Kitchen

// https://www.codewars.com/kata/57d1f36705c186d018000813

// Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

// Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

// Rules:

// Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.

function gordon(a) {
  return (
    a
      .toUpperCase()
      .replace(/[A]/g, "@")
      .replace(/[EIUO]/g, "*")
      .split(" ")
      .join("!!!! ") + "!!!!"
  );
}

// Best practice:

// function gordon(ramsay) {
//   return ramsay
//     .toUpperCase()
//     .replace(/\w+/g, '$&!!!!')
//     .replace(/[AEIOU]/g, v => v == 'A' ? '@' : '*');
// }

// Clever solution:

// const gordon=a=>a.toUpperCase().split(" ").map(a=>a.replace(/A/g,"@").replace(/[EIOU]/g,"*")+"!!!!").join(" ");
