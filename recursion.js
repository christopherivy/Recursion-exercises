/** product: calculate the product of an array of numbers. */

function product (nums, index = 0) {

	if(nums.length === index) {
		return 1;
	} else {
		return nums[ index ] * product(nums, index + 1);
	}
}

/** longest: return the length of the longest word in an array of words. */

function longest (words, index = 0, currentLongestWord = 0) {
	// check if the array is empty
	if(index === words.length) return currentLongestWord;

	// longest word is 0 until the var below.
	currentLongestWord = Math.max(words[ index ].length, currentLongestWord);
	console.log(currentLongestWord, index);

	// console.log(words[ index ].length, currentLongestWord);

	return longest(words, index + 1, currentLongestWord);
}

/** everyOther: return a string with every other letter. */

function everyOther (str) {

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome (str) {

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex (arr, val) {

}

/** revString: return a copy of a string, but in reverse. */

function revString (str) {

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings (obj) {

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch (arr, val) {

}


// console.log(product([ 2, 3, 4 ]));
console.log(longest([ 'gy', "hello", "hsdfsi", "hola" ]));


// module.exports = {
// 	product,
// 	longest,
// 	everyOther,
// 	isPalindrome,
// 	findIndex,
// 	revString,
// 	gatherStrings,
// 	binarySearch
// };
