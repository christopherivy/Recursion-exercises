/** product: calculate the product of an array of numbers. */

function product (nums, index = 0) {

	if(nums.length === index) {
		return 1;
	} else {
		return nums[ index ] * product(nums, index + 1);
	}
}

// ---------------------------------------------------------------------------------
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

// ---------------------------------------------------------------------------------


/** everyOther: return a string with every other letter. */

function everyOther (str, index = 0, newStr = '') {
	// check to see if the string is empty by checking indexes
	// if so return it
	if(index >= str.length) return newStr;

	// if not, add the first char to newStr
	newStr += str[ index ];

	// return the same func but adding 2 to the inx and add to newStr
	return everyOther(str, index + 2, newStr);
}
// ----------------------------------------------------------

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome (str, index = 0) {
	// get a left index baseline
	// get a right index baseline
	let leftIndex = index;

	// the str has 7 letters in it but we want to know how many index places.
	let rightIndex = str.length - index - 1;

	// this lets you know that the indexes are equal in you are in the middle.
	if(leftIndex >= rightIndex) return true;

	// check if the 2 chars viewed from outer to center are the same.
	if(str[ leftIndex ] !== str[ rightIndex ]) return false;


	return isPalindrome(str, index + 1);

}
// ------------------------------🔥🔥🔥🔥🔥🔥🔥---------------------------------------------------

/** findIndex: return the index of val in arr (or -1 if val is not present). */

let animals = [ "duck", "cat", "pony", 'horse', 'dog' ];

function findIndex (arr, val, index = 0) {
	// check if the array has something in it. if not return -1
	if(index === arr.length) return -1;

	// if the arr at the index is equal to val, return the index
	if(arr[ index ] === val) return index;

	// keep doing the same, adding 1 to the index
	return findIndex(arr, val, index + 1);

}


// ---------------------------------------------------------------------------------

/** revString: return a copy of a string, but in reverse. */

function revString (str, index = 0, newStr = "") {
	// check to see if there is something to reverse
	if(newStr.length === str.length) return newStr;

	// grabbing the letter at the end of the str
	newStr += str[ str.length - 1 - index ];

	// console.log(str[ str.length - 1 - index ]);
	console.log(newStr, index);

	// console.log(newStr);
	return revString(str, index + 1, newStr);
}
// ---------------------------------------------------------------------------------

/** gatherStrings: given an object, return an array of all of the string values. */
let obj = {
	firstName: "Lester",
	favoriteNumber: 22,
	moreData: {
		lastName: "Testowitz"
	},
	funFacts: {
		moreStuff: {
			anotherNumber: 100,
			deeplyNestedString: {
				almostThere: {
					success: "you made it!"
				}
			}
		},
		favoriteString: "nice!"
	}
};



function gatherStrings (obj) {
	// make an array to hold the strings
	let strings = [];
	// loop over the object
	for(let key in obj) {
		// console.log(obj[ key ]);
		if(typeof obj[ key ] === "string") {
			strings.push(obj[ key ]);
		}
		// 
		if(typeof obj[ key ] === "object") {
			strings.push(...gatherStrings(obj[ key ]));
		}
	}

	console.log(strings);
	return strings;
	// if the type at the key is string push to the array
	// if the type at the key is object push to the
	// return the array


}
// ---------------------------------------------------------------------------------

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch (arr, val, left = 0, right = arr.length) {
	// check to see if arr has values, if not return -1
	// get to the middle of the arr

	if(left > right) {
		return -1;
	}

	let middle = Math.floor((right + left) / 2);

	if(arr[ middle ] === val) {
		return middle;
	}
	if(arr[ middle ] > val) {
		return binarySearch(arr, val, left, middle - 1);
	}
	return binarySearch(arr, val, middle + 1, right);

}
// ---------------------------------------------------------------------------------


// console.log(product([ 2, 3, 4 ]));
// console.log(longest([ 'gy', "hello", "hsdfsi", "hola", 'asdfhkjasdfasdflahslkdjf' ]));
// console.log(everyOther("fantastic"));
// console.log(isPalindrome("tacocat"));  // true
// console.log(isPalindrome("tacodog"));  // false
// console.log(findIndex(animals, "cat"));  // 1
// console.log(findIndex(animals, "horse"));  // 3
// console.log(findIndex(animals, "porcupine"));   // -1
// console.log(revString("porcupine")); // 'enipucrop'
// console.log(gatherStrings(obj)); // ["Lester", "Testowitz", "you made it!", "nice!"];
console.log(binarySearch([ 1, 2, 3, 4 ], 1)); // 0
console.log(binarySearch([ 1, 2, 3, 4 ], 3)); // 2
console.log(binarySearch([ 1, 2, 3, 4 ], 5)); // -1



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
