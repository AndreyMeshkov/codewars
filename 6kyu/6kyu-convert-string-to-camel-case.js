// Convert string to camel case

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

function toCamelCase(str) {
	return str.split('').map((val, index, arr) => arr[index - 1] === '-' || arr[index - 1] === '_' ? val.toUpperCase() : val).filter(el => el !== '-' && el !== '_').join('');
}