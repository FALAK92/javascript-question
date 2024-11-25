// 1. Write a function `isEven` that takes a number as an argument and returns true if the number is even and false if it is odd.

function isEven(number) {
  return number % 2 === 0;
}
console.log(isEven(5));
console.log(isEven(4));
console.log(isEven(8));
console.log(isEven(13));

// 2. Create a function `countVowels` that takes a string and returns the number of vowels in that string.

function countVowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

console.log(countVowels("javascript"));
console.log(countVowels("falak"));

// 3. Write a function `reverseString` that takes a string and returns it reversed (e.g., "hello" becomes "olleh").
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("falak"));
console.log(reverseString("hello"));

// 4. Create a function `findMax` that takes an array of numbers and returns the largest number.
function findMax(arr) {
  return Math.max(...arr);
}
console.log(findMax([2, 8, 9, 4]));

// 5. Write a function `isPalindrome` that checks if a given string is a palindrome (reads the same backward as forward).
function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log(isPalindrome("radar"));
console.log(isPalindrome("help"));

// 6. Create a function `fibonacci` that returns the nth Fibonacci number.
function fibonacci(n) {
  let a = 0,
    b = 1;
  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return n === 0 ? 0 : b;
}
console.log(fibonacci(8));
console.log(fibonacci(7));

//   7. Write a function `factorial` that calculates the factorial of a given number.
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(5));
console.log(factorial(4));

// 8. Create a function `removeDuplicates` that takes an array and returns a new array without duplicates.
const removeDuplicates = (array) => [...new Set(array)];

console.log(removeDuplicates([1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 7, 7]));

//  9. Write a function `sumArray` that takes an array of numbers and returns the sum.

function sumArray(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

const array = [1, 8, 9];
console.log(sumArray(array));

// 10. Create a function `sortArray` that takes an array of numbers and returns it sorted in ascending order.

function sortArray(numbers) {
  return numbers.sort((a, b) => a - b);
}
const answer = [1, 8, 6, 2, 5];
console.log(sortArray(answer));

// 11. Write a function `stringLength` that returns the length of a given string.
function stringLength(Ilength) {
  return Ilength.length;
}
const newLenght = "javascript";
console.log(stringLength(newLenght));

// 12. Create a function `toUpperCase` that takes a string and returns it in uppercase.

function toUpperCase(Icase) {
  return Icase.toUpperCase();
}
const uppercase = "falak naaz";
console.log(toUpperCase(uppercase));

// 13. Write a function `capitalizeFirstLetter` that capitalizes the first letter of each word in a string.
function capitalizeFirstLetter(cLetter) {
  return cLetter
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
const str = "hello! what are you doing?";
console.log(capitalizeFirstLetter(str));

// 14. Create a function `mergeArrays` that takes two arrays and merges them into one.

function mergeArrays(array1, array2) {
  return array1.concat(array2);
}
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(mergeArrays(arr1, arr2));

// 15. Write a function `isPrime` that checks if a number is prime.
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(isPrime(5));
console.log(isPrime(8));

// 16. Create a function `countWords` that counts the number of words in a string.
function countWords(Istring) {
  return Istring.trim().split(/\s+/).length;
}
console.log(countWords("we are learning javascript"));
console.log(countWords("I am full stack developer"));

// 17. Write a function `arrayContains` that checks if an array contains a specific value.
function arrayContains(arr, value) {
  return arr.includes(value);
}
console.log(arrayContains([1, 2, 3, 4], 5));
console.log(arrayContains([2, 4, 8], 8));

// 18. Create a function `uniqueElements` that returns an array of unique elements from a given array.
function uniqueElements(arr) {
  return [...new Set(arr)];
}

const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = uniqueElements(arr);
console.log(uniqueArray);

// 19. Write a function `flattenArray` that flattens a nested array.
function flattenArray(arr) {
  return arr.flat(Infinity);
}

const nestedArray = [1, [2, [3, 4], 5], [6, 7], 8];
const flatArray = flattenArray(nestedArray);
console.log(flatArray);

// 20. Create a function `repeatString` that takes a string and a number, and returns the string repeated that many times.

function repeatString(str, num) {
  return num > 0 ? str.repeat(num) : "";
}

console.log(repeatString("falak", 3));
console.log(repeatString("java", 1));

// 21. Write a function `getRandomInt` that returns a random integer between two numbers.
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 10));
console.log(getRandomInt(5, 15));

// 22. Create a function `average` that calculates the average of an array of numbers.
function average(arr) {
  if (arr.length === 0) return 0;
  const sum = arr.reduce((count, num) => count + num, 0);
  return sum / arr.length;
}
console.log(average([1, 2, 3]));
console.log(average([10, 20]));
console.log(average([]));

// 23. Write a function `removeSpaces` that removes all spaces from a string.
function removeSpaces(str) {
  return str.split(" ").join("");
}

console.log(removeSpaces("Hello World"));
console.log(removeSpaces("  java  script "));
console.log(removeSpaces(" No Spaces Here "));

// 24. Create a function `difference` that returns the difference between the largest and smallest numbers in an array.
function difference(arr) {
  if (arr.length === 0) return 0;
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return max - min;
}
console.log(difference([10, 2, 5, 8, 20]));
console.log(difference([1, 1, 1, 1]));

// 25. Write a function `shuffledArray` that takes an array and returns it shuffled randomly.
function shuffledArray(arr) {
  return arr
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

const Adjust = [5, 4, 3, 2, 1];
console.log(shuffledArray(Adjust));

// 26. Create a function `longestWord` that returns the longest word in a string.
function longestWord(sentence) {
  const words = sentence.match(/\b\w+\b/g);
  const sortedWords = words.sort((a, b) => b.length - a.length);
  return sortedWords[0];
}

const sentence = "May Allah safe our Pakistan.";
console.log(longestWord(sentence));

// 27. Write a function `countDown` that takes a number and counts down to zero, logging each number.
function countDown(number) {
  for (let i = number; i >= 0; i--) {
    console.log(i);
  }
}
countDown(8);

// 28. Create a function `firstNonRepeatingChar` that finds the first non-repeating character in a string.
function firstNonRepeatingChar(str) {
  return (
    [...str].find((char) => str.indexOf(char) === str.lastIndexOf(char)) || null
  );
}

console.log(firstNonRepeatingChar("efficient"));
console.log(firstNonRepeatingChar("hheelloo"));

// 29. Write a function `toTitleCase` that converts a string to title case.
function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(toTitleCase("we learn javascript and then switch to react js."));

// 30. Create a function `removeElement` that removes a specified element from an array.
function removeElement(array, element) {
  return array.filter((item) => item !== element);
}

const set = [1, 1, 3, 5, 4, 1];
const result = removeElement(set, 1);
console.log(result);

// 31. Write a function `swap` that swaps the values of two variables.
function swap(a, b) {
  [a, b] = [b, a];
  return { a, b };
}

let x = 2,
  y = 4;
({ a: x, b: y } = swap(x, y));
console.log(x, y);

// 32. Create a function `countOccurrences` that counts how many times a specific value appears in an array.
function countOccurrences(array, value) {
  return array.reduce((count, item) => (item === value ? count + 1 : count), 0);
}

const times = [1, 9, 3, 4, 9, 5, 9, 8, 9];
console.log(countOccurrences(times, 9));

// 33. Write a function `mostFrequent` that finds the most frequently occurring element in an array.
function mostFrequent(array) {
  const frequencyMap = {};
  let maxCount = 0;
  let mostFrequentElement = null;

  for (let item of array) {
    frequencyMap[item] = (frequencyMap[item] || 0) + 1;

    if (frequencyMap[item] > maxCount) {
      maxCount = frequencyMap[item];
      mostFrequentElement = item;
    }
  }

  return mostFrequentElement;
}

const fre = [1, 2, 2, 2, 4, 2, 3, 2, 2];
console.log(mostFrequent(fre));

// 34. Create a function `combineStrings` that concatenates two strings with a space in between.
function combineStrings(str1, str2) {
  return `${str1} ${str2}`;
}

console.log(combineStrings("Hello", "Javascript"));

// 35. Write a function `randomColor` that generates and returns a random RGB color.
function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

console.log(randomColor());

// 36. Create a function `sumOfDigits` that returns the sum of the digits of a number.
function sumOfDigits(num) {
  return Math.abs(num)
    .toString()
    .split("")
    .reduce((sum, digit) => sum + parseInt(digit), 0);
}

console.log(sumOfDigits(289));
console.log(sumOfDigits(-123));

// 37. Write a function `findIndex` that returns the index of a specific value in an array.
function findIndex(array, value) {
  return array.indexOf(value);
}
const find = [10, 20, 30, 40, 50];
console.log(findIndex(find, 50));

// 38. Create a function `shuffleString` that shuffles the characters of a string randomly.
function shuffleString(str) {
  return str
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
}
console.log(shuffleString("hongkong"));

// 39. Write a function `secondLargest` that finds the second largest number in an array.
function secondLargest(arr) {
  const uniqueSorted = [...new Set(arr)].sort((a, b) => b - a);
  return uniqueSorted.length > 1 ? uniqueSorted[1] : null;
}
const numbers = [3, 1, 2, 1, 8, 9];
console.log(secondLargest(numbers));

// 40. Create a function `stringToArray` that converts a string to an array of words.
function stringToArray(str) {
  return str.trim().split(/\s+/);
}

const sent = "  We are fullstack developers.  ";
console.log(stringToArray(sent));

// 41. Write a function `mergeSortedArrays` that merges two sorted arrays into one sorted array.
function mergeSortedArrays(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}
const array1 = [1, 3, 5, 7, 9];
const array2 = [2, 4, 6, 8, 10];
console.log(mergeSortedArrays(array1, array2));

// 42. Create a function `sumPositiveNumbers` that sums all positive numbers in an array.
function sumPositiveNumbers(arr) {
  return arr.filter((num) => num > 0).reduce((sum, num) => sum + num, 0);
}
const nums = [-3, 5, -2, 5, -1, 4];
console.log(sumPositiveNumbers(nums));

// 43. Write a function `extractDomain` that extracts the domain from a URL.
function extractDomain(url) {
  try {
    const hostname = new URL(url).hostname;
    return hostname.replace(/^www\./, "");
  } catch (error) {
    return "Invalid URL";
  }
}
console.log(extractDomain("https://www.typography.com/page"));
console.log(extractDomain("www.pakistan.net"));

// 44. Create a function `sumEvenNumbers` that sums all even numbers in an array.
function sumEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0).reduce((sum, num) => sum + num, 0);
}
const num = [1, 2, 3, 4, 5, 6, 7];
console.log(sumEvenNumbers(num));

// 45. Write a function `getDayOfWeek` that returns the day of the week for a given date.
function getDayOfWeek(date) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayIndex = new Date(date).getDay();
  return days[dayIndex];
}
console.log(getDayOfWeek("2024-9-15"));
console.log(getDayOfWeek("2024-7-11"));

// 46. Create a function `largestEvenNumber` that finds the largest even number in an array.
function largestEvenNumber(arr) {
  const evenNumbers = arr.filter((num) => num % 2 === 0);
  return evenNumbers.length > 0 ? Math.max(...evenNumbers) : null;
}
const large = [1, 3, 5, 2, 8, 10];
console.log(largestEvenNumber(large));

const noEvens = [1, 3, 5, 7];
console.log(largestEvenNumber(noEvens));

// 47. Write a function `mergeObjects` that merges two objects into one.
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}
const object1 = { a: 1, b: 2 };
const object2 = { b: 2, c: 3 };

console.log(mergeObjects(object1, object2));

// 48. Create a function `capitalizeFirstLetter` that capitalizes the first letter of each word in a string.
function capitalizeFirstLetter(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(capitalizeFirstLetter("Quaid-e-Azam is the founder of Pakistan."));

// 49. Write a function `randomInteger` that generates a random integer between two given values.
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomInteger(1, 10));
// 50. Create a function `uniquArray` that returns an array with duplicate values removed.
function uniquArray(arr) {
  return [...new Set(arr)];
}

const uni = [1, 2, 3, 4, 2, 5, 1];
console.log(uniquArray(uni));
