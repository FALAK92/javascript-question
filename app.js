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

// 51. Write a function `isAnagram` that checks if two strings are anagrams of each other (e.g., "listen" and "silent").
function isAnagram(str1, str2) {
  return str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');
}

console.log(isAnagram("listen", "silent")); 
console.log(isAnagram("study", "dusty")); 

// 52. Create a function `removeVowels` that takes a string and returns a new string with all vowels removed.
function removeVowels(str) {
  return str.replace(/[aeiouAEIOU]/g, '');
}
console.log(removeVowels("Javascript is fun"));

// 53. Write a function `getAge` that calculates the age of a person based on their birth year.
function getAge(birthYear) {
  const currentYear = new Date().getFullYear(); 
  return currentYear - birthYear; 
}

console.log(getAge(1989)); 
console.log(getAge(2000));

// 54. Create a function `findMissingNumber` that finds the missing number in a given array of consecutive integers.
function findMissingNumber(arr) {
  const n = arr.length + 1;
  return (n * (n + 1)) / 2 - arr.reduce((sum, num) => sum + num, 0);
}
console.log(findMissingNumber([1, 2, 3, 5])); 

// 55. Write a function `countUppercase` that counts the number of uppercase letters in a string.
function countUppercase(str) {
  return (str.match(/[A-Z]/g) || []).length;
}
console.log(countUppercase("JavaScript is FUN")); 

// 56. Create a function `validateEmail` that checks if a given email address is valid.
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
console.log(validateEmail("example@example.com")); 
console.log(validateEmail("invalid-email")); 

// 57. Write a function `toggleNavbar` that shows or hides a navigation bar when a button is clicked.
function toggleNavbar() {
  const navbar = document.getElementById('navbar');
  navbar.style.display = navbar.style.display === 'none' ? 'block' : 'none';
}

document.getElementById('toggleButton').addEventListener('click', toggleNavbar);

// 58. Create a function `submitForm` that validates a form and submits it if all fields are filled correctly.
function submitForm(event) {
  event.preventDefault();


  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  
  if (!name || !email || !message) {
    alert('Please fill all the fields.');
    return false;
  }

  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return false;
  }


  alert('Form submitted successfully!');
  document.getElementById('myForm').submit();
}
document.getElementById('myForm').addEventListener('submit', submitForm);

// 59. Write a function `addToCart` that adds an item to a shopping cart and updates the cart count.
let cartCount = 0; 

function addToCart(item) {
 
  cartCount++;
  document.getElementById('cartCount').textContent = cartCount
  alert(`${item} has been added to the cart.`);
}

addToCart("Apple");

// 60. Create a function `searchProducts` that searches for products in an array and returns matching results.
const products = [
  "Apple",
  "Banana",
  "Orange",
  "Grapes",
  "Mango",
  "Pineapple",
  "Strawberry",
  "Blueberry"
];

function searchProducts(query) {
  const lowerCaseQuery = query.toLowerCase();
  const results = products.filter(product => 
    product.toLowerCase().includes(lowerCaseQuery)
  );

  return results;
}

console.log(searchProducts("apple")); 
console.log(searchProducts("berry")); 
console.log(searchProducts("grape")); 

// 61. Write a function `sortByPrice` that sorts an array of products by their price.
/**
 * Sorts an array of products by their price in ascending order.
 * @param {Array} items - Array of product objects.
 * Each product should have a `price` property.
 * @returns {Array} - Sorted array of products by price.
 */
function sortByPrice(items) {
  return items.sort((a, b) => a.price - b.price);
}

// Example usage:
const items = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 600 },
];

const sortedProducts = sortByPrice(items);
console.log("Sorted Products:", sortedProducts);

// 62. Create a function `highlightText` that highlights specific keywords in a block of text.
function highlightText(text, keywords, highlightClass = "highlight") {
  if (!text || !keywords.length) return text;

  // Combine all keywords into a single regex pattern
  const regex = new RegExp(`(${keywords.join("|")})`, "gi");

  // Replace matching keywords with a span for highlighting
  return text.replace(regex, (match) => `<span class="${highlightClass}">${match}</span>`);
}

const text = "JavaScript is a versatile programming language.";
const keywords = ["JavaScript", "programming"];
const highlightedText = highlightText(text, keywords);

console.log("Highlighted Text:", highlightedText);

// 63. Write a function `validatePassword` that checks if a password meets certain criteria (length, special characters, etc.).

function validatePassword(password) {
  // Criteria:
  // - Minimum length of 8 characters
  // - At least one uppercase letter
  // - At least one lowercase letter
  // - At least one digit
  // - At least one special character
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (password.length < minLength) {
    return "Password must be at least 8 characters long.";
  }
  if (!hasUpperCase) {
    return "Password must contain at least one uppercase letter.";
  }
  if (!hasLowerCase) {
    return "Password must contain at least one lowercase letter.";
  }
  if (!hasDigit) {
    return "Password must contain at least one digit.";
  }
  if (!hasSpecialChar) {
    return "Password must contain at least one special character.";
  }

  return "Password is valid.";
}
const password = "MyPassword1@";
const results = validatePassword(password);
console.log(results);

// 64. Create a function `scrollToTop` that scrolls the page to the top smoothly when called.
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

document.getElementById("scrollToTopButton").addEventListener("click", scrollToTop);

// 65. Write a function `updateProfilePicture` that allows a user to upload a new profile picture.

function updateProfilePicture() {
  const fileInput = document.getElementById('fileInput');
  fileInput.click(); // Simulate the file input click

  // When a file is selected
  fileInput.addEventListener('change', function() {
    const file = fileInput.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        // Update the profile picture with the new image
        const profilePicture = document.getElementById('profilePicture');
        profilePicture.src = e.target.result;
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  });
}

// Add event listener to the button to trigger file input
document.getElementById('uploadButton').addEventListener('click', updateProfilePicture);


// 66. Create a function `validatePhoneNumber` that checks if a phone number is valid based on a specified format.
function validatePhoneNumber(phoneNumber) {

  const regex = /^\+(\d{1,3})-(\d{3})-(\d{3})-(\d{4})$/;


  if (regex.test(phoneNumber)) {
    return "Phone number is valid.";
  } else {
    return "Invalid phone number format. Please use the format: +X-XXX-XXX-XXXX";
  }
}
const phoneNumber = "+1-34-567-8901";
const check = validatePhoneNumber(phoneNumber);
console.log(check);

// 67. Write a function `getCurrentDateTime` that returns the current date and time in a specified format.
function getCurrentDateTime() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  
  const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  
  return formattedDateTime;
}

const currentDateTime = getCurrentDateTime();
console.log(currentDateTime); 

// 68. Create a function `generateRandomPassword` that creates a random password based on user-defined criteria.

function generateRandomPassword(length, useUppercase = true, useLowercase = true, useNumbers = true, useSpecialChars = true) {
  // Define possible character sets
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChars = '0123456789';
  const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
  
  // Build a pool of characters based on user criteria
  let charPool = '';
  if (useUppercase) charPool += uppercaseChars;
  if (useLowercase) charPool += lowercaseChars;
  if (useNumbers) charPool += numberChars;
  if (useSpecialChars) charPool += specialChars;

  // If no character pool is selected, return an error
  if (charPool === '') {
    return 'Error: At least one character type must be selected.';
  }

  // Generate random password
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charPool.length);
    password += charPool[randomIndex];
  }

  return password;
}

function generateAndShowPassword() {
  const randomPassword = generateRandomPassword(12);  // Password length is 12
  document.getElementById('passwordOutput').textContent = randomPassword;
}
// 69. Write a function `rotateArray` that rotates an array to the right by a given number of steps.
function rotateArray(arr, steps) {
  const length = arr.length;
  const normalizedSteps = steps % length;
  return [...arr.slice(-normalizedSteps), ...arr.slice(0, -normalizedSteps)];
}

const ar = [1, 2, 3, 4, 5];
const steps = 2;

console.log("Rotated Array:", rotateArray(ar, steps));

// 70. Create a function `comparePasswords` that checks if two password fields match during registration.
function comparePasswords(password1, password2) {
  return password1 === password2;
}


const password1 = "securePassword123";
const password2 = "securePassword123";

if (comparePasswords(password1, password2)) {
  console.log("Passwords match!");
} else {
  console.log("Passwords do not match.");
}
// 71. Write a function `isAdult` that takes an age and returns true if the age is 18 or older, and false otherwise.
function isAdult(age) {
  return age >= 18;
}

console.log(isAdult(20)); 
console.log(isAdult(17));
console.log(isAdult(18));

// 72. Create a function `concatStrings` that takes two strings and returns them concatenated together.
function concatStrings(str1, str2) {
  return str1 + str2;
}

console.log(concatStrings("Hello, ", "World!")); 
console.log(concatStrings("Frontend", "Developer"));

















